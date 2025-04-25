---
layout: post
title: Cache AWS CDK DockerImageAsset on GitHub Actions
tags:
  - aws-cdk
  - github-actions
description: "Cache aws-cdk DockerImageAsset layers on GitHub Actions to speed up your builds."
---

## Background

Slow Continuous Integration (CI) builds slow down the development process and levy a tax on each change your team makes.
If you're using [AWS Cloud Development Kit (aws-cdk)](https://aws.amazon.com/cdk/) to publish Docker images via the
[`DockerImageAsset` construct](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ecr_assets.DockerImageAsset.html),
you've probably noticed that, by default, the image completely rebuilds on each CI run. This is slow and wasteful. Let's
fix it!

NOTE: I'll be using the Docker [GitHub Actions cache (gha) backend](https://docs.docker.com/build/cache/backends/gha/)
in this post, but you can use a similar approach with
[other caching backends](https://docs.docker.com/build/cache/backends/), as well.

## The Code

Here's an example stack using the `DockerImageAsset` construct:

```ts
import { Stack, type StackProps } from "aws-cdk-lib";
import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import { Construct } from "constructs";
import { join } from "path";

export class CachedDockerImageStack extends Stack {
  constructor(scope: Construct, props: StackProps) {
    super(scope, "CachedDockerImageStack", props);

    const dockerImage = new DockerImageAsset(this, "DockerImage", {
      directory: join(__dirname, "docker"),

      ...(isCi()
        ? {
            cacheTo: {
              type: "gha",
              params: { mode: "max" },
            },
            cacheFrom: [{ type: "gha" }],
            outputs: ["type=docker"],
          }
        : {}),
    });

    // use the docker image asset however you'd like
    // (e.g., in ECS, Lambda, etc.)
  }
}

function isCi(): boolean {
  // CI=true is set by GitHub Actions, CircleCI, etc.
  return process.env.CI !== undefined;
}
```

As you can see, we conditionally enable caching when running in CI. This is done by checking if the `CI` environment
variable is set. If so, we set the `cacheTo`, `cacheFrom`, and `outputs` properties on the `DockerImageAsset`. Note that
the `outputs` property could be removed if [this issue](https://github.com/aws/aws-cdk/issues/29768) is fixed upstream.

Then, in your GitHub Actions workflow, you need to set up Docker BuildKit before you run `cdk deploy`.

```yaml
on:
  push:
    branches:
      - main

jobs:
  cdk-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      # buildx is required to support caching docker layers
      # using the GitHub Actions cache backend
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
        with:
          install: true
          use: true
      # This is required for the `gha` cache to work with CDK DockerImageAssets
      # See https://docs.docker.com/build/cache/backends/gha/#authentication
      - name: Expose GitHub Runtime
        uses: crazy-max/ghaction-github-runtime@v3
      - name: CDK Deploy
        run: npx cdk deploy --require-approval never '**'
```

The two important steps are `Set up Docker Buildx` and `Expose GitHub Runtime`. The former creates a Docker BuildKit
builder that supports GitHub actions caching. The latter exposes the GitHub runtime to the Docker BuildKit builder so
the GitHub cache can be saved after the build is complete
([docs](https://docs.docker.com/build/cache/backends/gha/#authentication)).

## Verifying Caching

To verify that caching is working, look for log messages that look like this:

```shell
exporting to GitHub Actions Cache
preparing build cache for export
writing layer sha256:0d40125de8fc0a5adcd170151ff4ea2e82b28f87c19180bd27779e03d8ccf430
writing layer sha256:0d40125de8fc0a5adcd170151ff4ea2e82b28f87c19180bd27779e03d8ccf430 2.7s done
writing layer sha256:4abcf20661432fb2d719aaf90656f55c287f8ca915dc1c92ec14ff61e67fbaf8
writing layer sha256:4abcf20661432fb2d719aaf90656f55c287f8ca915dc1c92ec14ff61e67fbaf8 0.3s done
preparing build cache for export 3.3s done
writing layer sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1 0.1s done
DONE 3.3s
```

If you see `exporting to GitHub Actions Cache`, then the cache layers are being saved!

Then, on subsequent builds, you should see cache hits for your docker layers:

```shell
[2/3] RUN apk add --no-cache     bash     curl     git     jq     openssh-client     python3     py3-pip     rsync     zip
CACHED
```

In this example, the `apk add` layer was cached from a prior build, so it didn't need to be rebuilt (which saves lots of
time).

You can learn more about Docker Layer Caching, in general,
[in the Docker documentation](https://docs.docker.com/build/cache/).

## AppStagingSynthesizer

Historically, CDK has used a single, monolithic ECR repository to store all `DockerImageAsset`s. There have been
[lots](https://github.com/aws/aws-cdk/issues/2663) [of](https://github.com/aws/aws-cdk-rfcs/issues/64) threads on this
issue in the past.

However, we can finally create purpose-built ECR repositories for our assets, with simple-to-configure lifecycle rules
to keep costs down. This is done using the
[`AppStagingSynthesizer` construct](https://docs.aws.amazon.com/cdk/api/v2/docs/app-staging-synthesizer-alpha-readme.html),
which is currently in alpha. With just a few lines of code, you can configure the `AppStagingSynthesizer`.

First, when defining your CDK `App`, set the `defaultStagingSynthesizer` to `AppStagingSynthesizer`.

```ts
#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { AppStagingSynthesizer } from "@aws-cdk/app-staging-synthesizer-alpha";
import { BucketEncryption } from "aws-cdk-lib/aws-s3";

const app = new App({
  defaultStackSynthesizer: AppStagingSynthesizer.defaultResources({
    appId: "CachedDockerImageDemo",
    stagingBucketEncryption: BucketEncryption.S3_MANAGED,
    imageAssetVersionCount: 10, // Keep 10 latest images
  }),
});
```

Note that while the `AppStagingSynthesizer` is in alpha, you need to
`npm install --save @aws-cdk/app-staging-synthesizer-alpha` or `yarn add @aws-cdk/app-staging-synthesizer-alpha`.

Then, when defining your `DockerImageAsset`, you need to specify an `assetName`. Here's how you'd modify the example
above:

```ts
const dockerImage = new DockerImageAsset(this, "DockerImage", {
  directory: join(__dirname, "docker"),
  assetName: "my-docker-image-asset", // Set this when using the AppStagingSynthesizer

  ...(isCi()
    ? {
        cacheTo: {
          type: "gha",
          params: { mode: "max" },
        },
        cacheFrom: [{ type: "gha" }],
        outputs: ["type=docker"],
      }
    : {}),
});
```

Now, when you deploy your stack, you'll see a new ECR repository created for your Stack. Since I specified
`imageAssetVersionCount: 10`, only the 10 most recent images will be kept in the repository. Older images will be
automatically deleted by an auto-configured
[ECR lifecycle policy](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).

## Caching Multiple Docker Images

If your stack container multiple `DockerImageAsset`s, you'll need to deconflict the cache name for each image. You can
do this via the
[Docker GitHub Actions Cache `scope` parameter](https://docs.docker.com/build/cache/backends/gha/#scope).

For example:

```ts
import { Stack, type StackProps } from "aws-cdk-lib";
import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import { Construct } from "constructs";
import { join } from "path";

export class CachedDockerImageStack extends Stack {
  constructor(scope: Construct, props: StackProps) {
    super(scope, "CachedDockerImageStack", props);

    const dockerImage1 = new DockerImageAsset(this, "DockerImage1", {
      directory: join(__dirname, "docker-image-1"),

      ...(isCi()
        ? {
            cacheTo: {
              type: "gha",
              params: { mode: "max", scope: "docker-image-1" },
            },
            cacheFrom: [{ type: "gha", params: { scope: "docker-image-1" } }],
            outputs: ["type=docker"], // Would be unnecessary if https://github.com/aws/aws-cdk/issues/29768 is fixed
          }
        : {}),
    });

    const dockerImage2 = new DockerImageAsset(this, "DockerImage1", {
      directory: join(__dirname, "docker-image-2"),

      ...(isCi()
        ? {
            cacheTo: {
              type: "gha",
              params: { mode: "max", scope: "docker-image-2" },
            },
            cacheFrom: [{ type: "gha", params: { scope: "docker-image-2" } }],
            outputs: ["type=docker"], // Would be unnecessary if https://github.com/aws/aws-cdk/issues/29768 is fixed
          }
        : {}),
    });
  }
}

function isCi(): boolean {
  // CI=true is set by GitHub Actions, CircleCI, etc.
  return process.env.CI !== undefined;
}
```

In fact, I create a handy `Construct` to wrap this logic up.

```ts
import { DockerImageAsset, type DockerImageAssetProps } from "aws-cdk-lib/aws-ecr-assets";
import type { Construct } from "constructs";

export type CachedDockerImageAssetProps = Exclude<DockerImageAssetProps, "cacheFrom" | "cacheTo"> &
  Required<Pick<DockerImageAssetProps, "assetName">>;

export class CachedDockerImageAsset extends DockerImageAsset {
  constructor(scope: Construct, id: string, props: CachedDockerImageAssetProps) {
    super(scope, id, {
      ...props,

      // Add GitHub Actions caching in CI
      ...(isCi()
        ? {
            cacheTo: { type: "gha", params: { mode: "max", scope: props.assetName } },
            cacheFrom: [{ type: "gha", params: { scope: props.assetName } }],
            outputs: ["type=docker"], // equivalent to `--load`, which exports the image to the local Docker daemon
          }
        : {}),
    });
  }
}

function isCi(): boolean {
  // CI=true is set by GitHub Actions, CircleCI, etc.
  return process.env.CI !== undefined;
}
```

Then, in my stack, I just call `CachedDockerImageAsset` instead of `DockerImageAsset`.

```ts
const dockerImage = new CachedDockerImageAsset(this, "HttpServerImage", {
  directory: join(__dirname, "docker"),
  assetName: "my-docker-image-asset",
});
```

## Demo Code

If you'd like to see this code in action, check out
[blimmer/cdk-docker-image-asset-gha-caching](https://github.com/blimmer/cdk-docker-image-asset-gha-caching).

Are you interested in improving your developer's productivity in AWS CDK? Let's [connect](/freelance)! I'd love to help.

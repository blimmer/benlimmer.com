---
layout: post
title: How To Fix CircleCI DockerHub Too Many Requests Errors
tags:
  - circleci
  - dockerhub
description:
  "How to avoid DockerHub rate limiting from CircleCI jobs by authenticating docker image pulls. Instructions to avoid
  Error response from Daemon: toomanyrequests: Too Many Requests."
---

Beginning November 1, 2020, DockerHub will begin
[rate-limiting anonymous image pulls](https://docs.docker.com/docker-hub/download-rate-limit/) from
[DockerHub](https://hub.docker.com/).

Rate-limiting anonymous DockerHub access is a significant change that will impact many continuous integrations built on
platforms like CircleCI, Semaphore, and more.

## How to Fix the Problem

To work around the rate limit, you'll need to authenticate with DockerHub in a few places.

1. **Create a DockerHub user** if you don't already have one. You can
   [sign up for DockerHub here](https://hub.docker.com/signup).
1. **Decide if you need a [paid plan](https://www.docker.com/pricing)**. Free users get up to 200 image pulls every six
   hours. If you're working for an organization with many builds, you'll want to upgrade to at least the "Pro" Plan,
   which, when paid annually, costs \$5/month and allows for unlimited image pulls.
1. **Create a DockerHub access token**. This token is how you'll authenticate your build's Docker image pulls. Visit
   [the security settings page](https://hub.docker.com/settings/security) and create a new access token. Give it a
   description like "CircleCI".

   ![create a new access token on hub.docker.com](/assets/images/posts/2020/10/new-access-token.png)

   ![generated access token](/assets/images/posts/2020/10/generated-access-token.png)

1. **Create a CircleCI context** for DockerHub. You'll use this [context](https://circleci.com/docs/2.0/contexts/) to
   store your new DockerHub access token safely. Call the context `dockerhub`, then create a new environment variable
   called `DOCKERHUB_ACCESS_TOKEN`. Paste the access token you generated in the previous step.

   ![create a new circleci context](/assets/images/posts/2020/10/new-context.png)

1. **Update your CircleCI configurations**. The next sections describe how to authenticate the different types of
   CircleCI builds:
   - [`docker` executors](#updating-docker-executors)
   - [`docker` executors with `setup_remote_docker`](#updating-docker-executors-with-setup_remote_docker)
   - [`machine` executors](#updating-machine-executors)

## Updating `docker` executors

If you're using the CircleCI [`docker` executor](https://circleci.com/docs/2.0/executor-types/#using-docker), you'll
need to authenticate the initial docker image pull.

Your unauthenticated CircleCI configuration (`.circleci/config.yml`) will look something like this:

```yaml
version: 2.1

workflows:
  version: 2
  default:
    jobs:
      - build
      - deploy

jobs:
  build:
    docker:
      - image: circleci/node:latest
    steps:
      - checkout
      - run: echo 'hello world'

  deploy:
    docker:
      - image: circleci/node:latest
    steps:
      - checkout
      - run: echo 'hello world'
```

You need to authenticate the pull of `circleci/node:latest` by authenticating using the access token you created in the
steps above. To do this, add the `dockerhub` context and an `auth` object to your docker image definition. Your
configuration will look something like this:

```yaml
version: 2.1

workflows:
  version: 2
  default:
    jobs:
      - build:
          # ADDED
          context: dockerhub
      - deploy:
          # ADDED
          context: dockerhub

jobs:
  build:
    docker:
      - image: circleci/node:latest
        # ADDED
        auth:
          username: your-dockerhub-username
          password: $DOCKERHUB_ACCESS_TOKEN
    steps:
      - checkout
      - run: echo 'hello world'

  deploy:
    docker:
      - image: circleci/node:latest
        # ADDED
        auth:
          username: your-dockerhub-username
          password: $DOCKERHUB_ACCESS_TOKEN
    steps:
      - checkout
      - run: echo 'hello world'
```

## Updating `docker` executors with `setup_remote_docker`

If you're using [`setup_remote_docker`](https://circleci.com/docs/2.0/building-docker-images/#overview) with your
`docker` executor, you also need to rerun a docker login command to authenticate the remote docker instance.

Your unauthenticated CircleCI configuration (`.circleci/config.yml`) will look something like this:

```yaml
version: 2.1

workflows:
  version: 2
  default:
    jobs:
      - build

jobs:
  build:
    docker:
      - image: circleci/node:latest
    steps:
      - checkout
      - setup_remote_docker
      - run: docker run somecontainer
```

You'll need to add the `context` and `auth` object, as you did above, but you'll also need to run a `docker login` in
your `steps` before interacting with `docker`.

```yaml
version: 2.1

workflows:
  version: 2
  default:
    jobs:
      - build:
          # ADDED
          context: dockerhub

jobs:
  build:
    docker:
      - image: circleci/node:latest
        # ADDED
        auth:
          username: your-dockerhub-username
          password: $DOCKERHUB_ACCESS_TOKEN
    steps:
      - checkout
      - setup_remote_docker
      # ADDED
      - run: docker login --username your-dockerhub-username --password $DOCKERHUB_ACCESS_TOKEN
      - run: docker run somecontainer
```

## Updating `machine` Executors

If you're using CircleCI's [`machine` executor](https://circleci.com/docs/2.0/executor-types/#using-machine), you only
need to authenticate using `docker login` in your job's `steps`.

Your unauthenticated CircleCI configuration (`.circleci/config.yml`) will look something like this:

```yaml
version: 2.1

workflows:
  version: 2
  default:
    jobs:
      - build

jobs:
  build:
    machine:
      - image: ubuntu-1604:202007-01
    steps:
      - checkout
      - run: docker run somecontainer
```

You'll need to add your `dockerhub` context and run a `docker login` in your `steps` before interacting with `docker`.

```yaml
version: 2.1

workflows:
  version: 2
  default:
    jobs:
      - build:
          # ADDED
          context: dockerhub

jobs:
  build:
    machine:
      - image: ubuntu-1604:202007-01
    steps:
      - checkout
      # Added
      - run: docker login --username your-dockerhub-username --password $DOCKERHUB_ACCESS_TOKEN
      - run: docker run somecontainer
```

## Reducing Duplication

You can use YAML's [merge](https://yaml.org/type/merge.html) feature to reduce duplication in your configuration file.
Instead of duplicating the `auth` parameter in each of your jobs, reuse the code like this:

```yaml
version: 2.1

# Named YAML Block
docker-auth: &docker-auth
  auth:
    username: your-dockerhub-username
    password: $DOCKERHUB_AUTH_TOKEN

workflows:
  version: 2
  default:
    jobs:
      - build:
          context: dockerhub
      - deploy:
          context: dockerhub

jobs:
  build:
    docker:
      - image: "circleci/node:latest"
        # Reused YAML
        <<: *docker-auth
    steps:
      - checkout
      - run: echo 'hello world'

  deploy:
    docker:
      - image: "circleci/node:latest"
        # Reused YAML
        <<: *docker-auth
    steps:
      - checkout
      - run: echo 'hello world'
```

## Resources

For more information, check out:

- [My build fails to pull Docker image with "Too Many Requests" - Rate Limiting by Docker Hub](https://support.circleci.com/hc/en-us/articles/360049758552-My-build-fails-to-pull-Docker-image-with-Too-Many-Requests-Rate-Limiting-by-Docker-Hub)
- [Docker Hub rate limiting FAQ](https://support.circleci.com/hc/en-us/articles/360050623311-Docker-Hub-rate-limiting-FAQ)
- [Authenticate with Docker to avoid impact of Nov. 1st rate limits](https://discuss.circleci.com/t/updated-authenticate-with-docker-to-avoid-impact-of-nov-1st-rate-limits/37567/35)

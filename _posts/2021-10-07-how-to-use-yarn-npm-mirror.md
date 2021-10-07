---
layout: post
title: How to work around NPM downtime by using Yarn's mirror
tags:
  - npm
  - troubleshooting
description:
  "NPM has been down for more than an hour. You can work around the NPM downtime by using yarn's package mirror. Here's
  how."
---

NPM has been [down for over an hour today (2021-10-07)](https://status.npmjs.org/incidents/7pqfqvkwvb58?u=9ls83ts9v472),
causing a lot of lost productivity. Luckily, `yarn` hosts an NPM registry mirror that's still working.

There are two main ways to use the Yarn registry: as a one-off or globally.

## Using the Yarn Registry as a One-Off

You can pass the `--registry` flag to npm commands like `npm install`/`npm ci`, like this:

```console
npm install --registry=https://registry.yarnpkg.com
```

This is useful if you don't want to muck with your global NPM configuration, as described below.

## Using the Yarn Registry by Default

To automatically use the Yarn registry, update your global npm configuration like this:

```console
npm config set -g registry=https://registry.yarnpkg.com
```

Now your NPM client will automatically use yarn's registry when you run `npm` commands. When `npm` is back up, you can
undo this setting like this:

```console
npm config set -g registry=https://registry.npmjs.org
```

## Potential Gotchas

- If your organization publishes private packages to NPM, you're out of luck until NPM is back up.

---
layout: post
title: ember-cli-deploy 0.5.x + node helpers + hipchat
tags:
- ember-cli-deploy
- ember-cli-deploy-hipchat

description: "Now that ember-cli-deploy 0.5.x is live, an update on existing projects
and an exciting announcement about a plugin to notify HipChat about deploys and activations."
---

I've [previously spoken]( {% post_url 2015-05-31-deploying-a-location-aware-ember-app %} )
about [ember-cli-deploy](https://github.com/ember-cli/ember-cli-deploy) and how it
makes your deployments safe and easy. This weekend I've been hacking against the
new ember-cli-deploy pipeline (0.5.x+) and I have a few updates to share.

## ember-cli-deploy 0.5.x
The pipeline version of ember-cli-deploy strips everything back to basics and
allows plugins to handle each step of your deployment. Instead of making assumptions
about deployment it allows you to setup your deployment pipeline however you like.

Because of these changes, you'll need to install a few extra plugins to maintain
the [redis](http://redis.io/) and [s3](https://aws.amazon.com/s3/) deployment
described in my ember-cli-deploy [talk](https://www.youtube.com/watch?v=MT0LKcVh6Rw)
from earlier this year.

However, I went through the process this weekend and it was very simple to upgrade
and even produce new plugins for the pipeline.

## location-aware-ember
I've updated the
[client](https://github.com/blimmer/location-aware-ember/commit/b4bebd982d795d9d4b805ea7dd013f6b4da3c5d7) and
[server](https://github.com/blimmer/location-aware-ember-server/commit/cb5e49781d5d78ee6a56ab6ff7b7adfaf45bf117)
components of my [location-aware-ember]( {% post_url 2015-05-31-deploying-a-location-aware-ember-app %} )
project, so you can see the changes you'll need to make to go from 0.4.x to 0.5.x
of ember-cli-deploy. You can also have a look at the
[official upgrade docs](http://ember-cli.github.io/ember-cli-deploy/docs/v0.5.x/upgrading-apps/#upgrade-an-app-that-uses-the-lightning-strategy) for more info.

## node-ember-cli-deploy-redis
If you're using my [node-ember-cli-deploy-redis](https://github.com/blimmer/node-ember-cli-deploy-redis)
project, I've also updated it (in version 0.3+) to work with ember-cli-deploy 0.5.x
and beyond.

Check out the
[CHANGELOG.md](https://github.com/blimmer/node-ember-cli-deploy-redis/blob/develop/CHANGELOG.md#upgrade-guide)
for info on how to upgrade from an older version of the middleware.

## ember-cli-deploy-hipchat
At [ibotta](https://ibotta.com) we are using [HipChat](https://www.hipchat.com/)
and there wasn't a notification plugin for the new version of ember-cli-deploy.

Luckily, the configurable pipeline made it super easy to create a plugin (in an afternoon)
to get this working. If you're using HipChat, check out my new project
[ember-cli-deploy-hipchat](https://github.com/blimmer/ember-cli-deploy-hipchat)!

---
layout: post
title: Install an Ember Addon from GitHub
tags:
- emberjs
- ember-cli
- ember-addons

description: "This post explains how to install an Ember Addon from GitHub,
instead of a versioned release from NPM."
---

Most of the time you need to install an Ember Add-On, you'll use the
latest-and-greatest released version of that add-on. To do that, you'll use
the simple command:

    ember install <addon-name>

However, sometimes you'll want to test against a specific branch, or commit
from an add-on's GitHub project. Luckily, this is easy to do with
[ember-cli](ember-cli.com).

* Grab the https repository url from GitHub  

<div class='center'><img alt="GitHub HTTPS Repo URL Copy" src="/assets/images/posts/2015/04/copy-repo-url.png"></div>

* `ember install` it:

      ember install https://github.com/<repo-username>/<repo-name>.git

If your repo is private, and you need to access it via ssh, use this syntax:

* Grab the ssh repository url from GitHub  

<div class='center'><img alt="GitHub SSH Repo URL Copy" src="/assets/images/posts/2015/04/copy-ssh-repo.png"></div>

* `ember install` it:  

      ember install git+ssh://git@github.com:<repo-username>/<repo-name>.git#<optional-branch>

You're done. Enjoy!

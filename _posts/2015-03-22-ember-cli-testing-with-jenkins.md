---
layout: post
title: Running Ember CLI Tests on Jenkins CI
tags:
- emberjs
- ember-cli
- jenkins
- jenkins ci

description: "This post will walk you through running Ember CLI testem tests running with
Jenkins CI."
---

This post will walk you through running [Ember CLI](http://www.ember-cli.com/)
[testem](https://github.com/airportyh/testem) tests running with [Jenkins CI](https://jenkins-ci.org/).

## Initial Setup

First, you'll need to get Jenkins all set up. Here are some helpful guides to get you up and running:

- [Installing Jenkins on Ubuntu](https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+on+Ubuntu)
- [EC2 Jenkins](https://aws.amazon.com/marketplace/pp/B008AT8BYK)

## Plugin Setup

You'll need a few plugins to run ember-cli on your Jenkins instance:

1.  **[NodeJS Plugin](https://wiki.jenkins-ci.org/display/JENKINS/NodeJS+Plugin)** The Node plugin will add support for
    running the `ember` command in the job shell.

    - Install a current version of node At the time of this writing 0.12.0 is what you'll want to install.

    - Navigate to Manage Jenkins

      ![Manage Jenkins Button](/{% ministamp _images/posts/2015/03/manage-jenkins.png assets/images/posts/2015/03/manage-jenkins.png %})

    - Click NodeJS Installations

      ![NodeJS Installations Button](/{% ministamp _images/posts/2015/03/node-installations.png assets/images/posts/2015/03/node-installations.png %})

    - Configure NodeJS Installation

      ![NodeJS Plugin Configuration](/{% ministamp _images/posts/2015/03/node-configuration.png assets/images/posts/2015/03/node-configuration.png %})

      Choose "Install from nodejs.org" and choose a current version. You'll want to install ember-cli, phantom, and
      bower as global packages. You can see that I always peg the versions to prevent issues when a new version is
      released.

2.  **[TAP Plugin](https://wiki.jenkins-ci.org/display/JENKINS/TAP+Plugin)** This will allow Jenkins to display results
    from the testem test suite run. Install it through the Plugin Manager and you're set.

3.  **[GitHub Plugin](https://wiki.jenkins-ci.org/display/JENKINS/GitHub+Plugin)** I'm assuming you're using GitHub to
    store your source code. If you're not, you'll need to do some research to figure out how to automatically build your
    project on push.

The [plugin documentation](https://wiki.jenkins-ci.org/display/JENKINS/GitHub+Plugin) site will walk you through all the
configuration steps you'll need.

## Job Setup

Now we're ready to configure our job to run our test suite.

1.  Create a new job I've had the best luck with the Freestyle Projects.

    ![Freestyle Project Radio Button](/{% ministamp _images/posts/2015/03/freestyle-project.png assets/images/posts/2015/03/freestyle-project.png %})

2.  Configure the job

    <a href='/assets/images/posts/2015/03/job-configuration.png' target='_blank' rel="noopener">![Sample Configuration Settings](/{% ministamp _images/posts/2015/03/job-configuration.png assets/images/posts/2015/03/job-configuration.png %})</a>

    - Setup the Git Repository
    - Check "Build when a change is pushed to GitHub"
    - Check "Provide Node & npm bin/ folder to PATH" and select your installation (e.g. 0.12.0)
    - Click "Add Build Step" and use the following shell script:

           npm install
           bower update
           ember test | tee results.tap

    - Click "Add a Post Build Action" and Choose "Publish TAP Results" pointing to your results.tap file you indicated
      in the shell script

3.  Run it! To test, you can click the "Build Now" button, and you should see your TAP results published.

<div class='center'><img alt="Example TAP Test Results" src="{{ site.base_url }}/{% ministamp _images/posts/2015/03/test-results.png assets/images/posts/2015/03/test-results.png %}" /></div>

## Conclusion

At a high level, it's pretty easy to get this set up. The portion that I couldn't find documentation for was the piping
`ember test` output to a file for the plugin to pick up.

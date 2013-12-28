---
layout: post
title: Automatically Publish Javadoc to GitHub Pages with Travis CI
tags: 
- github
- travis ci
- github pages
- javadoc
- automatic publish javadoc
description: "How to automatically publish Javadoc documentation to a GitHub Pages (gh-pages) site using Travis-CI, custom scripts and secret environment variables"
---

I hate doing the same thing more than once. Like, a lot. The more things that are automated, better.

With our recent project, [swt-bling](https://github.com/ReadyTalk/swt-bling), I've informally taken on a lot of the build and deployment tasks. My goal with this OSS project is to make it as sustainable and attractive for others to use as possible. Thus, documentation is a must.

We're already using [Travis CI](https://travis-ci.org/) to automatically run our unit and integration tests, build our jars and deploy SNAPSHOTs out to [Sonatype](http://oss.sonatype.org/content/repositories/snapshots/com/readytalk/swt-bling/). It's a good start, but automatically generating JavaDoc for our [GitHub page](http://oss.readytalk.com/swt-bling/) would be a huge win.

After lots of searching around, I ended up having a hard time finding one definitive source of how to accomplish this with Travis CI. So, here's how you do it.

# How to Do It
1. [Setup GitHub Pages](http://pages.github.com/#project-site) if you haven't already.  
This will create a gh-pages branch on your GitHub project. Checking out and automatically commiting and pushing to this branch is how this little trick works.  

2. [Setup Travis CI](http://about.travis-ci.org/docs/user/getting-started/) if you haven't already.  
Travis is neat. In most use cases, it just works with your build system. It also has the ability to encrypt 'secret' data (in our case, the token to allow Travis to push to our gh-pages branch).  

3. [Create a GitHub Access Token](https://github.com/settings/applications) for Travis.  
As I mentioned, this will allow Travis to push to our gh-pages branch. 
<div class="center"><img src="/assets/images/posts/2013/12/GhAccessToken.png" width="800" height="146" alt="GitHub Create New Personal Access Token" /></div> 

4. [Encrypt](http://about.travis-ci.org/docs/user/encryption-keys/) your access token.
You'll need to install the Travis gem with ```gem install travis```. Then you'll run  

		travis encrypt GH_PAGES=your token from step 4

    Don't forget to place this in your ```.travis.yml``` configuration in your repo in a ```secret``` block.

5. Create a script that you'll have Travis run.
On [swt-bling](https://github.com/ReadyTalk/swt-bling), I created a [```.utility```](https://github.com/ReadyTalk/swt-bling/tree/master/.utility) folder in the root of the repo that contains our Travis shell scripts. You can start off [with ours](https://github.com/ReadyTalk/swt-bling/blob/master/.utility/push-javadoc-to-gh-pages.sh) as a sample. I'll explain the script below, if you're craving more details.  

6. Tell Travis to run your script.
In your .travis.yml file, you'll tell Travis to run your script after a successful build. For instance on swt-bling we have  

	 	after_success:
	 	- .utility/initiate-publish.sh
	 	

7. That's it! That should get you going with automatic publishes!

# Script Explanation
I'll take a second to explain how we've come to the script we're using today. There was a lot of trial and error with this particular script, so I'll go through it for clarity.

## The Big-Ol' Conditional 
If you tell Travis to publish ```after_success```, it will run on a ton of builds you don't want Javadoc published for. So, for our purposes, we define a number of prerequisites to publish.  

```[ "$TRAVIS_REPO_SLUG" == "ReadyTalk/swt-bling" ]```  
1. We want this to only happen from our repo, not forks.  
Since people will clone this script when they fork the repo, we don't want them to be able to publish Javadoc if they set up Travis. Luckily, our secret ```GH_PAGES``` variable will not work for their fork, but we might as well bail from the script if it's not our repo.

```[ "$TRAVIS_JDK_VERSION" == "oraclejdk7" ]```  
2. swt-bling is built against OpenJDK 6 and Oracle JDK 7. JDK 6 has pretty old-school looking documentation, so we specify that we only want Javadoc built by JDK 7 to be pushed out.

```[ "$TRAVIS_PULL_REQUEST" == "false" ]```  
3. Building pull requests is pretty awesome, we want to make sure that people have pushed solid code before we merge it in. However, we don't want documentation to be published until we merge it.

```[ "$TRAVIS_BRANCH" == "master" ]```  
4. If it's merged to master, we want to publish Javadoc for it.

## The Meat of the Script
	# Get to the Travis build directory, configure git and clone the repo
	cd $HOME
  	git config --global user.email "travis@travis-ci.org"
  	git config --global user.name "travis-ci"
  	git clone --quiet --branch=gh-pages https://${GH_TOKEN}@github.com/ReadyTalk/swt-bling gh-pages > /dev/null

  	# Commit and Push the Changes
  	cd gh-pages
  	git rm -rf ./javadoc
  	cp -Rf $HOME/javadoc-latest ./javadoc
  	git add -f .
  	git commit -m "Lastest javadoc on successful travis build $TRAVIS_BUILD_NUMBER auto-pushed to gh-pages"
  	git push -fq origin gh-pages > /dev/null

And that will do it! It's pretty straightforward, but hopefully this helps out. Happy publishing!

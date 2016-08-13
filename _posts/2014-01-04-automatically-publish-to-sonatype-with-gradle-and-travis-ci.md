---
layout: post
title: Automatically Publish to Sonatype with Gradle and Travis CI
tags:
- travis ci
- github
- sonatype
- gradle
description: "How to automatically publish SNAPSHOT and RELEASE artifacts to Sonatype (Nexus) using Gradle and Travis CI. This approach utilizes the gradle-nexus-plugin from Benjamin Muschko."
---

As I've [mentioned before]({% post_url 2013-12-26-automatically-publish-javadoc-to-gh-pages-with-travis-ci %}), I hate doing stuff manually. When we started the [swt-bling](/portfolio/swt-bling) project, I wanted to make sure we had a solid way for people to use our current development (SNAPSHOT) jars, as well as our RELEASE jars.

At [ReadyTalk](http://www.readytalk.com), we are standardizing our build and deployment of Java code with [Gradle](http://www.gradle.org/). So, it was an easy choice to pick Gradle for swt-bling. Plus, I get to learn some [Groovy](http://groovy.codehaus.org/) by working with Gradle so it's an awesome learning experience.

# Background
When I was initially searching for a way to use Gradle to push out artifacts to Sonatype, there were [a lot](http://jedicoder.blogspot.com/2011/11/automated-gradle-project-deployment-to.html) of [different](http://mike-neck.github.io/blog/2013/06/21/how-to-publish-artifacts-with-gradle-maven-publish-plugin-version-1-dot-6/) [resources](http://stackoverflow.com/questions/19307341/android-library-gradle-release-jar) explaining how to push artifacts out. However, they were all doing similar things with very little variation. Because of these similarities I started searching for a Gradle Plugin to do the heavy lifting for us.

After wasting time trying to implement things the hard way, I decided to scrap the aforementioned method and look for a plugin. Enter [gradle-nexus-plugin](https://github.com/bmuschko/gradle-nexus-plugin) by [Benjamin Muschko](https://github.com/bmuschko).  

Benjamin is well known in the Gradle community, and he's the author of the soon-to-be-released [Gradle in Action](http://www.manning.com/muschko/) book published by Manning. So, it seemed like a reputable open-source project to rely on. Utilizing his plugin made life way easier for us!

# How to Do It
Alright, enough background. How do you do this with your project?  

## Prerequisites
1. Get all set up with Sonatype, if you're not already.  

	Check out the [Sonatype OSS Maven Repository Usage Guide](https://docs.sonatype.org/display/Repository/Sonatype+OSS+Maven+Repository+Usage+Guide) and follow the initial setup steps (1-4). The current process includes filing a Jira ticket with Sonatype to request the repo, so keep in mind that this might take some time to get a response back (it took about a day for us).

2. Ensure you've met the prerequisite step (5) on the [Sonatype OSS Maven Repository Usage Guide](https://docs.sonatype.org/display/Repository/Sonatype+OSS+Maven+Repository+Usage+Guide).  

	In our case, we were all set except for the GPG signing keys. We had to generate these and push them out to a public keyserver. Check out [How To Generate PGP Signatures With Maven](https://docs.sonatype.org/display/Repository/How+To+Generate+PGP+Signatures+With+Maven) if you need setup the GPG keys for Maven.

3. Create secret Travis CI entries for your Sonatype username and password.

	Travis will need to login using the username and password you created in step 1 to publish. Because we'll eventually have a utility script that Travis will run, you'll need to utilize Travis' [Encrypt](http://about.travis-ci.org/docs/user/encryption-keys/) functionality.

	To do this, install the Travis gem using:  

		gem install travis
	and run:  

		travis encrypt SONATYPE_USERNAME=username
		travis encrypt SONATYPE_PASSWORD=password

	Make sure you add the resulting encrypted variables to the ```secure``` block in your .travis.yml file.

## gradle-nexus-plugin
1. Include the plugin in your build script.

	We download the plugin on-demand from [BinTray](https://bintray.com/bmuschko/gradle-plugins/gradle-nexus-plugin), but you can download the plugin and include it in your repo if you'd like.

	In your build script you need to apply the plugin:  

		apply plugin: 'nexus'
	and include the BinTray repository (if you're not checking the plugin into your repo):

		buildscript {
		    repositories {
		        jcenter()
		    }

		    dependencies {
		        classpath 'org.gradle.api.plugins:gradle-nexus-plugin:0.6.1'
		    }
		}

2. Create publishing logic in Gradle.

	In swt-bling, we created a separate ```publish.gradle``` file and include that in our build.gradle. You can [check out ours](https://github.com/ReadyTalk/swt-bling/blob/master/gradle/publish.gradle) or the gradle-nexus-plugin [README](https://github.com/bmuschko/gradle-nexus-plugin#example) for an example.

	In a nutshell, you'll need to define a few things: the ```modifyPom``` closure and the ```nexus``` closure.<br /><br />
		The ```modifyPom``` closure will include all the information about your project that will go into the [Maven POM](http://maven.apache.org/pom.html). Keep in mind that if you want to be mirrored in [Maven Central](http://search.maven.org/), you'll need to meet the [Maven Central Sync Requirements](https://docs.sonatype.org/display/Repository/Sonatype+OSS+Maven+Repository+Usage+Guide#SonatypeOSSMavenRepositoryUsageGuide-6.CentralSyncRequirement).<br /><br />
		The ```nexus``` closure tells the gradle-nexus-plugin what it should be doing. For instance, do you want to attach the sources, javadoc and tests? Do you want to sign your artifacts, etc.

	Additionally, you'll want to make sure you have a version defined for your project. By default, the gradle-nexus-plugin expects a version string in two different formats: one for SNAPSHOTs and one for RELEASEs. To publish a SNAPSHOT just be sure that your version ends in -SNAPSHOT. Releases do not have -SNAPSHOT at the end.

3. Create a utility script for Travis to run.  

	If you've read my post on [Automatically Publishing Javadoc Using Travis]({% post_url 2013-12-26-automatically-publish-javadoc-to-gh-pages-with-travis-ci %}), you already know about our [.utility](https://github.com/ReadyTalk/swt-bling/tree/master/.utility) folder in swt-bling. For automatic publishing, we're going to create another shell script in this folder. You can use [ours](https://github.com/ReadyTalk/swt-bling/blob/master/.utility/initiate-publish.sh) as an example.

	The meat of the script is:  

	-   A conditional to only publish when certain prerequisites are met, including: only publishing from the ReadyTalk fork, not publishing pull-requests and only publishing items in the master branch.  

	- 	Invoking the Gradle command if the prerequisites are met. You'll need to remember to pass in the encrypted username and password variables we created above with the Travis gem. You'll end up with something like:

			 ./gradlew uploadArchives -PnexusUsername="${SONATYPE_USERNAME}" -PnexusPassword="${SONATYPE_PASSWORD}"

	- 	Worried about security? Don't worry, Travis will not allow forks to utilize your secret entries, so people will not be able to push to Sonatype as your organization.

4. Tell Travis to run the new script ```after_success```. So, in your .travis.yml file, you'll want a block that reads something like:

		after_success:
			- .utility/initiate-publish.sh

On your next push that meets the criteria specified in your utility script, you'll get an artifact pushed to your SNAPSHOT repository.

## Releases
You might have noticed that in the steps above we're not actually including information about our GPG key (or the password for the key). That's because I did just a bit of handwaving. We actually do not sign our SNAPSHOT artifacts or publish RELEASE artifacts using Travis CI.  

The reason we don't do this is because our security policy dictates that our GPG key and associated password never be stored outside of our network. For this reason, we actually use our internal Jenkins instance to publish our RELEASEs. Don't fear, though, we're still using the gradle-nexus-plugin, but just providing it with a few additional parameters that I'll lay out for you.  

There are three additional flags you need to pass to the ```uploadArchives``` task to stage a release with Sonatype.  

-	signing.keyId  
	The GPG keyId for your key. You can find this by running:

		gpg --list-secret-keys
	and copying the hex keyId from the output.
- signing.password  
	The password you used when you created your GPG key.
- signing.secretKeyRingFile  
	The path to the binary gpg file for your secret key. You can export your secret binary key by running:

		gpg --export-secret-key yourKeyId > filename.gpg

Once you have those three items, you'll end want to pass them to the Gradle ```uploadArchives``` task when you want to release. So, you'll end up with a long command like this:  

	./gradlew uploadArchives -PnexusUsername=sonatypeUsername -PnexusPassword=sonatypePassword '-Psigning.keyId=yourKeyId' '-Psigning.password=yourPassword' -Psigning.secretKeyRingFile=path/to/maven.gpg

Be sure that you remove the -SNAPSHOT from the version string when you're ready to publish your release artifact.

### Releasing the Artifact from Staging
Once the task above completes, your artifact will be staged with Sonatype, but you need to verify it all looks good before it's released from the staging area. To do this, you need to follow these steps:
1. Log into [Sonatype Pro](https://oss.sonatype.org/index.html)
2. Click "Staging Repositories" and scroll to the bottom of the list
3. Click "Close"
4. Click "Release"!

## Publishing Releases with Travis CI
If your security rules are a bit more lax than ours, you could theoretically do all of this with Travis and not rely on another Jenkins task like we do. If you decide to go this route, you'll need to do a few things:

1. Use ```travis encrypt``` to encrypt your signing.password.
2. Use a [symmetric encryption algorithm](http://en.wikipedia.org/wiki/Symmetric-key_algorithm) to encrypt your GPG signing key.
3. Use ```travis encrypt``` to encrypt your decryption key for your GPG key.
4. Upload your encrypted GPG file somewhere accessible by Travis CI.  
	You could check it into your repo, host it on another server somewhere, etc.
5. Modify your utility script to include the additional flags discussed above.

Though I haven't actually done the steps above with Travis, the theory is sound and I believe it should "just work". However, your mileage may vary.

# Summary
Though this might take a little bit of time to get just right for your situation, it is amazingly convenient once it's set up. You set it and forget it. Hopefully this walkthrough is helpful for your situation. If you find any problems with this method (things are constantly changing), please feel free to contact me (info in footer) and I'll update this documentation.

Happy publishing!

---
layout: post
title: Migrating a CoffeeScript Ember Application to Ember CLI
tags:
- emberjs
- ember-cli
- coffeescript
- es6
- es2015

description: "A high-level tutorial of how to migrate a global CoffeeScript EmberJS application over to Ember-CLI. This post includes info on moving from a Brunch build system to Ember-CLI's Broccoli build system and migrating CoffeeScript Mocha and Chai tests to Ember CLI."
---

The Ember community has spoken and standardized on a set of tools to write and
build ambitious web applications. This is great, but what about us early(ish)
adopters who didn't choose what the community has standardized on?

We chose to rewrite our Rails marketing app as an Ember app in March of 2014.
Back then, there weren't obvious choices for how to write, build and deploy
Ember applications. [Ibotta.com](https://ibotta.com/r/ndynlq) has been in production for
almost a year and uses a build, test and deployment system that highly varies
from the choices made by the Ember community.

# The Revelation
It seemed clear that the Ember Community was moving toward a standardized build
and deployment system, but it wasn't abundantly clear that
[Ember-CLI](http://www.ember-cli.com/),
[ES6 Modules](http://www.2ality.com/2014/09/es6-modules-final.html) and
ES6/2015 syntax would be so heavily adopted by the community.  

Because this wasn't obvious, we made some decisions that go against the grain
of the 2014/2015 Ember Community. Specifically, we bet on the following:

+ [CoffeeScript](http://coffeescript.org/)
+ [Sass](http://sass-lang.com/)
+ [Mocha](http://mochajs.org/) & [Chai](http://chaijs.com/)
+ [Brunch](http://brunch.io/)
+ [ExpressJS](http://expressjs.com/)

Some of these things will continue to work, and others are falling to the way-side.

At EmberConf 2015, we finally realized that we need to move off of our custom
architecture and follow the standards being set by the Ember community. No one
likes to argue for a multi-week engineering-only transition but, in this case,
it was necessary.  

So, starting this week, we at Ibotta are going all-in on a migration to Ember-CLI.
Here's how we're doing it.

# Initializing Ember CLI
The most obvious thing we need to do is to get off of Brunch and onto Ember CLI
as our build system. For the most part this isn't a difficult move and we actually
get a lot of things "out-of-the-box" that we had to implement custom solutions for.

## Retaining History
We really wanted to retain our git history since over a year of development went
into our previous application. Since git is pretty smart at recognizing renames,
we used the following strategy to retain as much history as possible.

To get started, we began like a new app by running `ember new` in a new directory.
Specifically, we ran `ember new --skip-git` to retain our previous private GitHub
repository. Next, we moved our previous repo into a folder called `old-app` into
the newly generated Ember CLI app folder. We moved `old-app/.git` into the new
directory to retain file history.

Commit! You're on your way. Run `ember s` to see a lovely Hello World.

As you migrate your existing application files over, make sure to move to the new
file and delete the old one. Git will realize that the file is essentially the
same and retain history from when you first wrote it.

# Dependencies
In our case, we had a few dependencies we couldn't move away from right away.
Our next step was to take care of this infrastructure to start migrating our app.

## CoffeeScript
As was extremely evident at EmberConf, [CoffeeScript](http://coffeescript.org) is
not the way forward for the Ember Community. Though it provides a lot of syntactic
sugar, the Ember community greatly prefers using ES6 syntax and the
[Babel transpiler](https://babeljs.io/) to CoffeeScript. Though I still think that
Coffee has some merits (exitensial operator, no need for semicolons, inline hash definitions),
we realize that this is not the way forward. However, we can't scrap and rewrite
a year of development work, so we need to get CoffeeScript running with Ember CLI.

Luckily, we aren't alone. The [ember-cli-coffeescript](https://github.com/kimroen/ember-cli-coffeescript)
project is pretty active, and supports most things we need to get up and running.
It allows us to write application code and tests in CoffeeScript to migrate our
app.

Get started by setting up the plugin as
[described in the README](https://github.com/kimroen/ember-cli-coffeescript/blob/master/README.md).
You can test it out by changing your `router.js` file to a `router.coffee` file
and fixing the syntax to see that it's truly working.  

The great part about this plugin is that you can write ES6 javascript alongside
your CoffeeScript and everything will work. So, get used to the ES6 syntax and
start to transition as time permits.

You'll need to hack your existing files a bit to get it working with `ember-cli-coffeescript`,
but it's pretty formulaic. Let's start with your Router, because you almost
undoubtedly have one.

In CoffeeScript you'd have something like this:  
{% highlight coffeescript %}
Ember.Router.reopen
  location: 'auto'

App.Router.map ->
  @route 'foo'
{% endhighlight %}

and with Ember CLI CoffeeScript, you'll translate to something like this:
{% highlight coffeescript %}
`import Ember from 'ember'`
`import config from './config/environment'`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @route 'company'

`export default Router`
{% endhighlight %}

The biggest change here is the ES6-style module import/export. You need to explicitly
import Ember (and your environment) and export the `Router` when you're done.
Use `ember generate` to help with the transition. It will deal with the backtick
imports and exports for you, making your copy/paste task a bit easier.

# Sass
Sass was a bit easier. The Ember community still likes Sass and they're working
on a [first-class Node port](https://github.com/sass-eyeglass/eyeglass), so it'll
be around for a bit.  

Just install the [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass)
add-on, follow the README and migrate your styles. Now you're rockin' sass. Easy.

# Mocha
We have a bunch of CoffeeScript Mocha tests around, and we want to retain these
tests as we port our app over.  

## Getting Mocha Tests Running
The first order of business is to support Mocha and Chai style tests whether
they're written in JavaScript or CoffeeScript. The
[ember-mocha](https://github.com/switchfly/ember-mocha) Ember-CLI add-on does
just this. It adds first-class support for testing Ember apps (just like QUnit)
in the CLI environment.  

Get it installed and try writing a quick test - does your Index Hello World app run?

## Mocha CoffeeScript
Now it gets a bit hairier. There wasn't an obvious choice for generating CoffeeScript
Mocha tests since we're going doubly against the grain from the Ember Community who
are using QUnit and JavaScript.

For this task, we ended up forking a repository of
[ember-cli-mocha-coffeescript](https://github.com/Ibotta/ember-cli-mocha-coffeescript).
We decided to do this because it provides handy generators for Ember Mocha tests
and allows us to port most of our tests over verbatim (inside the blueprint structure).

Get it installed and try generating a new CoffeeScript flavored test by running
`ember generate <test>`

# The Rest of the Plan
So this is where we're at today. Not bad for only a few hours in, right? We have
started to migrate over our application piece-by-piece, migrating application code
and tests over as we see fit. In all reality, it's grabbing a (seemingly) independent
piece of code and migrating it, it's dependencies and tests over to CLI.  

It was really helpful to get our
[tests running with Jenkins CI]({% post_url 2015-03-22-ember-cli-testing-with-jenkins %})
as part of this process to make sure we were on the right track.

I'm going to continue posting with specifics on the rest of our migration process,
but here's the general plan for those of your who are interested.

## Brunch
OK, it has got to go. The maintainers realize that Ember CLI is the way forward
for the community and they're not going to support it anymore. Here's the plan to
get away from it.

### Building
Broccoli + Ember CLI does most everything we need. There's not much we neeed to
change here to get up-and-running.

### Deployment
This is where things get interesting. Our previous app constructed the `index.html`
file in the ExpressJS server at request-time. We'll need to modify this slightly
to be CLI-compatible.  

As announced at EmberConf 2015, the best Ember-CLI add-ons for deployment are merging
into the new [ember-cli-deploy](https://github.com/ember-cli/ember-cli-deploy)
project and (in my opinion), will be the de-facto way to deploy your Ember application.

Make sure to [watch the talk](https://www.youtube.com/watch?v=Ro2_I5vtTIg) from
Ember.JS Munich to get the general gist of how ember-deploy works. This will get
us most of the way there, but we'll need to modify it slightly to work for us.

At request-time, we need to embed some session-specific information, like an
app token and the request's IP location, so we're going to need to modify from
directly serving the `index.html` file generated by `ember build --environment=production`.

My plan is to implement a plugin as I describe on
[this GitHub issue](https://github.com/ember-cli/ember-cli-deploy/issues/89) I
opened to easily support building the `index.html` file at request-time on our
ExpressJS app server. I hope for ember-cli-deploy 0.5.0 to be finalized before
I start to tackle that problem.

# Conclusion
Overall, this has been a really fun project. After EmberConf it feels really
good to be moving toward the standard way of building an ambitious EmberJS webapp.
Stay tuned for more posts on migrating to the new Ember CLI infrastructure!

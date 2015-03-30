---
layout: post
title: Introducing ember-cli-server-variables add-on
tags:
- emberjs
- ember-cli
- ember-addons

description: "An explanation of the motivation behind the Ember CLI add-on
ember-cli-server-variables and an example of how to use it in your application.
Also, some tips on developing your first Ember CLI add-on."
---

As I've mentioned in previous posts, we're working on migrating over our global
Ember application to Ember CLI. One of the big changes we are making as part of
this migration is how our `index.html` file is built and deployed.  

# Background
We use [ExpressJS](http://expressjs.com/) to serve up our application. Today, our
Express server generates the `index.html` file, embedding some request-specific
data in the page payload to be read in by the Ember application. For instance,
we use [Node GeoIP](https://github.com/bluesmoon/node-geoip) to determine the user's
physical location.  

Because Ember CLI generates an index.html file with the `ember build` command,
and ember-deploy saves this file off to Redis, we needed to come up with a way
to not build the index.html file on our application server at request-time.

I [briefly touched]({% post_url 2015-03-23-coffeescript-to-ember-cli %}#building)
on our plans to use [ember-cli-deploy](https://github.com/ember-cli/ember-cli-deploy)
to improve our deployment system. Pending support for a
[configuration-only](https://github.com/ember-cli/ember-cli-deploy/issues/89) deploy,
we will need to modify the index.html page using a library like
[CheerioJS](https://github.com/cheeriojs/cheerio) in our Express server before we
send the content down to the user.  

# ember-cli-server-variables
In order to simplify this process in production and dev environments, I wrote
an Ember CLI add-on called
[ember-cli-server-variables](https://github.com/blimmer/ember-cli-server-variables)
that makes adding and reading `meta` tag configuration variables a breeze.
Check out the project's [README](https://github.com/blimmer/ember-cli-server-variables/blob/master/README.md)
for the latest information on how to install and configure it.

## How it Works
Ever noticed the {%raw%}`{{content-for}}`{%endraw%} helpers in the stock Ember CLI index.html file?
The Ember CLI add-on environment allows add-ons to implement a `contentFor` function
in the index.js file that outputs the returned string directly into the page.
In our case, it's super handy because we need to write out meta tags into the
head of the file that contain request-specific information.  

All you have to do is place a {%raw%}`{{content-for 'server-variables'}}`{%endraw%} helper in your
index.html file provide an array of variables you'd like added to the page. The
add-on does everything else to get those meta variables into the head tag. You
can also provide sane defaults for development mode, when your app server won't
be running to fill in the variables.

## Example
After adding the {%raw%}`{{content-for 'server-variables'}}`{%endraw%} helper, edit your `environment.js` file with
a list of the variables you want added and (optionally) with defaults for
development.

{% highlight javascript %}
var ENV = {
  ...

  serverVariables: {
    tagPrefix: 'prefix',
    vars: ['token', 'location']
  }
};

if (environment === 'development') {
  ENV.serverVariables.defaults = {
    token: 'example',
    location: 'Denver'
  };
}
{% endhighlight %}

To confirm it's working, fire up development server `ember s` and check out the head tag. You'll
notice two new meta tags:

    <meta name="prefix-token" content="example">
    <meta name="prefix-location" content="Denver">

Now that you're all setup, you can use the convenience service implemented by
the add-on to fetch the property.

{% highlight javascript %}
MyController = Ember.Controller.extend({
  serverVariablesService = Ember.inject.service('serverVariables'),
  userLocation: Ember.computed.reads('serverVariablesService.location')
});
{% endhighlight %}

Great, everything is working in development now. Now the last task is to modify
your application server to find the tag and replace it with the appropriate content
for each request. This add-on doesn't care how you implement things on your app
server, but good choices include modifying the tags with a library like
[CheerioJS](https://github.com/cheeriojs/cheerio) or using string manipulation.  

Again, this step will be made easier once we figure out the [configuration-only](https://github.com/ember-cli/ember-cli-deploy/issues/89)
deploy with ember-cli-deploy because we will be able to construct the index.html
page on the app server again.

# Developing an Add-On
This was a great chance to learn about how to develop an add-on. As is common
with Ember CLI, there was an obvious way to get started and opinions in place
about how to structure the app. If you're about to jump into writing your own
add-on, definitely [read the docs](http://www.ember-cli.com/#developing-addons-and-blueprints)
to get started. Additionally, check out Brian Cardarella's
[tips for writing add-ons](http://reefpoints.dockyard.com/2015/03/22/tips-for-writing-ember-addons.html)
post for some tips and tricks.

# Conclusion
I hope that this write-up and add-on can be of use to others who need request-specific
data available to their applications. The add-on is pretty basic now, but I'm
interested to see if there are others who have ideas on how to make the add-on
more robust to cover all use-cases.  

If this library is useful to you, please make sure to
[star the project](https://github.com/blimmer/ember-cli-server-variables/stargazers)
and [file issues](https://github.com/blimmer/ember-cli-server-variables/issues) if
you find any.

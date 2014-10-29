---
layout: post
title: Ember.computed.* is your friend!
tags:
- emberjs

description: "Ember.computed is powerful. It has methods that reduce boilerplate code and increase readability."
---

I recently got turned on to a much more readable method for writing computed properties in Ember with CoffeeScript
by way of [Alex Speller](http://alexspeller.com/)'s talk at this year's EmberFest, [The mistakes everyone
makes with Ember.JS - Avoiding Common Pitfalls](https://www.youtube.com/watch?v=vRfr2nrsX14). I had previously
been writing computed properties like this:
{% highlight coffeescript %}
  foo: (->
    "foo#{@get('bar')}"
  ).property('bar')
{% endhighlight %}

Which works out just fine, but it's much more readable to take this same idea and turn it into this:
{% highlight coffeescript %}
  foo: Em.computed 'bar', ->
    "foo#{@get('bar')}"
{% endhighlight %}

This new method of writing computed properties made me investigate the [Ember namespace documentation](http://emberjs.com/api/classes/Ember.html),
which opened my eyes to a ton of shorthand helpers for computed properties. There are tons of great shorthand
methods to do simple computed property calculations that you should be utilizing. I highly recommend that you
look at the [documentation](http://emberjs.com/api/classes/Ember.html), but here are a few to get you excited.

## Greater Than Comparisons
Before:
{% highlight coffeescript %}
  isElementGreater: Em.computed 'value', ->
    @get('value') > 10
{% endhighlight %}

After:
{% highlight coffeescript %}
  isElementGreater: Em.computed.gt 'value', 10
{% endhighlight %}

## Logical 'Or'
Before:
{% highlight coffeescript %}
  orAllTheThings: Em.computed 'value1', 'value2', 'value3' ->
    @get('value1') || @get('value2') || @get('value3')
{% endhighlight %}

After:
{% highlight coffeescript %}
  orAllTheThings: Em.computed.or 'value1', 'value2', 'value3'
{% endhighlight %}

## Intersections
Before:
{% highlight coffeescript %}
  arrIntersect: Em.computed 'arr1', 'arr2', ->
    # utilize lodash/underscore
    # or (gasp) write it yourself
    _.intersection(@get('arr1'), @get('arr2'))
{% endhighlight %}

After:
{% highlight coffeescript %}
  arrIntersect: Em.computed.intersect 'arr1', 'arr2'
{% endhighlight %}

# Read the Docs!
Seriously, have a look at the [Ember namespace documentation](http://emberjs.com/api/classes/Ember.html).
Only write a custom computed property when you're doing something really interesting. Otherwise, let the
framework do the heavy lifting.

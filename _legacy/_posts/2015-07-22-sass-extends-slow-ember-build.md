---
layout: post
title: Slow Ember CLI builds and Sass @extends methods
tags:
  - emberjs
  - ember-cli
  - libsass
  - sasscompile
  - extends

description: "Slow ember cli builds can be caused by use of sass @extends directives."
---

After transitioning back to an older Ember project of mine, I noticed incredibly slow build times compared to other apps
I've worked on. The initial build was taking almost a full minute, and subsequent builds were taking almost 30 seconds.

### Cold Build

    Build successful - 51632ms.

    Slowest Trees                                 | Total
    ----------------------------------------------+---------------------
    SassCompiler                                  | 20416ms
    Babel                                         | 7292ms
    Babel                                         | 4652ms
    CoffeeScriptFilter                            | 2922ms
    ES6: App Tree                                 | 2773ms

    Slowest Trees (cumulative)                    | Total (avg)
    ----------------------------------------------+---------------------
    SassCompiler (1)                              | 20416ms
    Babel (8)                                     | 12836ms (1604 ms)
    CoffeeScriptFilter (2)                        | 4721ms (2360 ms)
    ES6: App Tree (1)                             | 2773ms

### Subsequent Builds

    file changed foo/bar.js

    Build successful - 25769ms.

    Slowest Trees                                 | Total
    ----------------------------------------------+---------------------
    SassCompiler                                  | 20473ms

    Slowest Trees (cumulative)                    | Total (avg)
    ----------------------------------------------+---------------------
    SassCompiler (1)                              | 20473ms

## Removing @extends

This was driving me insane, and I finally tracked down the cause of the slow builds. It was actually our use of Sass
[@extends](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend). Removing them produced this:

### Cold Builds

    Build successful - 33243ms.

    Slowest Trees                                 | Total
    ----------------------------------------------+---------------------
    Babel                                         | 7005ms
    Babel                                         | 4645ms
    Concat: Vendor                                | 3184ms
    CoffeeScriptFilter                            | 2737ms
    ES6: App Tree                                 | 2534ms
    JSHint tests- Mocha                           | 2330ms
    CoffeeScriptFilter                            | 1836ms
    JSHint app- Mocha                             | 1833ms

    Slowest Trees (cumulative)                    | Total (avg)
    ----------------------------------------------+---------------------
    Babel (12)                                    | 13011ms (1084 ms)
    CoffeeScriptFilter (2)                        | 4574ms (2287 ms)
    Concat: Vendor (1)                            | 3184ms
    ES6: App Tree (1)                             | 2534ms
    JSHint tests- Mocha (1)                       | 2330ms
    JSHint app- Mocha (1)                         | 1833ms

### Subsequent Builds

    file changed foo/bar.js

    Build successful - 6372ms.

    Slowest Trees                                 | Total
    ----------------------------------------------+---------------------
    SassCompiler                                  | 1474ms
    Funnel: App JS Files                          | 692ms
    ES6: App Tree                                 | 617ms
    Concat: App                                   | 603ms
    Concat: Vendor                                | 438ms
    TreeMerger (appAndDependencies)               | 355ms

    Slowest Trees (cumulative)                    | Total (avg)
    ----------------------------------------------+---------------------
    SassCompiler (1)                              | 1474ms
    Funnel: App JS Files (1)                      | 692ms
    ES6: App Tree (1)                             | 617ms
    Concat: App (1)                               | 603ms
    Concat: Vendor (1)                            | 438ms
    Babel (12)                                    | 424ms (35 ms)
    TreeMerger (appAndDependencies) (1)           | 355ms

## The solution

Turns out that each instance of `@extends` was increasing our build time by about 3-4 seconds. So, if your builds are
suddenly really slow, try cutting out your use of `@extends`. Some
[would say](http://www.sitepoint.com/avoid-sass-extend/) mixins are better, anyway.

At any rate, this has made developing our older app so much more pleasant.

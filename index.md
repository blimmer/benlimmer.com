---
layout: page
title: Ben Limmer | Keepin' it Real
tagline: Keepin' it Real
---
{% include JB/setup %}

You've stumbled upon a lovely little blog about all things geeky. Don't forget to follow me on [Twitter](http://www.twitter.com/l1m5/)!

<h2>Recent Blog Posts</h2>
<ul class="posts">
  {% for post in site.posts limit:5 %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

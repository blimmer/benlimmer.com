---
layout: default
title: Home
tagline: Ben Limmer | Keepin' it Real
description: "A blog about a myriad of technology topics written by Ben Limmer, software developer in Denver, Colorado, USA."
group: navigation
weight: 0
---
{% include JB/setup %}

<h2>Recent Blog Posts</h2>
<ul class="posts">
  {% for post in site.posts limit:5 %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

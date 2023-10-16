---
layout: page
author: "Ravi Gonçalves"
title: "Blog"
permalink: "/blog/"
---
<link rel="stylesheet" href="{{'./assets/css/blog.css' | relative_url}}">
My blog is the space where I share my learning journey in the area of Information Technology. Find tips, insights and valuable information about IT as we walk this path of technological discovery together

<div class="blog-posts">
  {% for post in site.posts %}
    <div class="blog-post">
      <h2 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
      <p class="post-excerpt">{{ post.excerpt }}</p>
    </div>
  {% endfor %}
</div>

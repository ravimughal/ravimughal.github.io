---
layout: page
title: Meus Projetos
permalink: /projetos/
---

<head>
    <link rel="stylesheet" href="{{'./assets/css/blog.css' | relative_url}}">
</head>

## Projetos

<div class="blog-posts">
  {% for projeto in site.projetos %}
    <div class="blog-post">
      <h2 class="post-title"><a href="{{ projeto.url }}">{{ projeto.title }}</a></h2>
      <p class="post-excerpt">{{ projeto.description | markdownify }}</p>
    </div>
  {% endfor %}
</div>


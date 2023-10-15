---
layout: page
title: Meus Projetos
permalink: /projetos/
---

<head>
    <link rel="stylesheet" href="{{'./assets/css/projeto.css' | relative_url}}">
</head>

## Projetos

<ul class="posts">
  {% for projeto in site.projetos %}
    <li class="post">
      <h2 class="post-title"><a href="{{ projeto.url }}">{{ projeto.title }}</a></h2>
      <p class="post-excerpt">{{ projeto.description | markdownify }}</p>
    </li>
  {% endfor %}
</ul>


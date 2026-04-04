---
layout: page
title: Projetos
permalink: /projects/
---

<p class="inner-page__intro">
  Sistemas e aplicações que implementei — backends, APIs e ferramentas web.
</p>

<div class="blog-posts">
  {% for projeto in site.projetos %}
    <div class="blog-post">
      <h2 class="post-title"><a href="{{ projeto.url }}">{{ projeto.title }}</a></h2>
      <p class="post-excerpt">{{ projeto.excerpt | markdownify }}</p>
    </div>
  {% endfor %}
</div>


---
layout: page
title: Meus Projetos
permalink: /projetos/
---

## Projetos

<ul>
{% for projeto in site.projetos %}
  <li>
    <h2><a href="{{ projeto.url }}">{{ projeto.title }}</a></h2>
    <p>{{ projeto.description }}</p>
  </li>
{% endfor %}
</ul>

<div class="projeto-carousel">
  {% for projeto in site.projetos %}
    <div class="projeto">
      <img src="{{ projeto.imagem }}" alt="{{ projeto.title }}">
      <h2>{{ projeto.title }}</h2>
      <p>{{ projeto.description }}</p>
    </div>
  {% endfor %}
</div>
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
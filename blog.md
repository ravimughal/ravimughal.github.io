---
layout: page
author: "Ravi Gonçalves"
title: "Blog"
permalink: "/blog/"
---

<section class="landing-section">
  <div class="landing-section__inner">
    <p class="landing-section__label">Artigos</p>
    <h1>Blog</h1>
    <p class="landing-section__intro">
      Meu blog é o espaço onde compartilho minha jornada de aprendizagem na área de Tecnologia da Informação.
      Aqui você encontrará dicas, insights e informações valiosas sobre TI, enquanto percorremos juntos esse
      caminho de descoberta tecnológica.
    </p>
    <div class="blog-posts">
      {% for post in site.posts %}
        <article class="blog-post">
          <p class="post-date">{{ post.date | date: "%d/%m/%Y" }}</p>
          <h2 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h2>
          <p class="post-excerpt">
            {{ post.excerpt | strip_html | truncate: 220 }}
          </p>
          <a class="read-more" href="{{ post.url | relative_url }}">Ler artigo</a>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
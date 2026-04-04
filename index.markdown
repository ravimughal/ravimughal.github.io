---
title: "Portfolio"
layout: indexLayout
---

  <a class="landing-skip" href="#conteudo">Saltar para o conteúdo</a>

  <header class="landing-header">
    <div class="landing-header__inner">
      <a class="landing-logo" href="{{ '/' | relative_url }}">RM</a>
      <nav class="landing-nav" aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#stack">Stack</a>
        <a href="#foco">Foco</a>
        <a href="#projetos">Projetos</a>
        <a href="#qualidades">Qualidades</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </div>
  </header>

  <main id="conteudo">
    <section class="landing-hero" aria-labelledby="hero-title">
      <div class="landing-hero__grid">
        <div>
          <p class="landing-hero__badge"><span aria-hidden="true"></span> Disponível para colaborações técnicas</p>
          <h1 id="hero-title">Ravi Mughal</h1>
          <p class="landing-hero__subtitle">Estudante de Tecnologia da Informação · FCUL</p>
          <p class="landing-hero__lead">
            Construo backends, APIs e aplicações web com bases de dados reais e arquitetura clara.
            Interesso-me por engenharia de software, sistemas distribuídos e soluções que funcionam em produção — do modelo de dados à camada de serviços.
          </p>
          <div class="landing-hero__actions">
            <a class="landing-btn landing-btn--primary" href="#projetos">Ver projetos</a>
            <a class="landing-btn landing-btn--ghost" href="{{ '/blog/' | relative_url }}">Ler blog</a>
            <a class="landing-btn landing-btn--outline" href="https://github.com/ravimughal" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a class="landing-btn landing-btn--outline" href="https://www.linkedin.com/in/ravimughal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div class="landing-hero__visual">
          <div class="landing-profile" aria-hidden="false">
            <div class="landing-profile__inner">
              <img src="{{ '/assets/images/ravimughal.png' | relative_url }}" width="400" height="400" alt="Retrato de Ravi Mughal">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="landing-section landing-section--alt" id="sobre" aria-labelledby="sobre-title">
      <div class="landing-section__inner">
        <p class="landing-section__label">Perfil</p>
        <h2 id="sobre-title">Sobre mim</h2>
        <div class="landing-about__text">
          <p>
            Sou <strong>Ravi Mughal</strong>, estudante de <strong>Tecnologia da Informação</strong> na Faculdade de Ciências da Universidade de Lisboa (FCUL).
            O meu percurso orienta-se para o <strong>desenvolvimento de software</strong> com ênfase em <strong>backend</strong>, <strong>aplicações web</strong>, <strong>bases de dados</strong> e <strong>arquitetura de sistemas</strong>.
          </p>
          <p>
            Gosto de transformar requisitos em desenho técnico: modelos de dados, contratos de API, camadas de serviço e validação de regras de negócio.
            Procuro sempre código legível, testável e alinhado com boas práticas de engenharia.
          </p>
        </div>
      </div>
    </section>
    <section class="landing-section" id="stack" aria-labelledby="stack-title">
      <div class="landing-section__inner">
        <p class="landing-section__label">Competências</p>
        <h2 id="stack-title">Stack e conhecimentos</h2>
        <p class="landing-section__intro">Tecnologias e áreas onde construo e experimento regularmente — de linguagens a infraestrutura de dados.</p>
        <div class="landing-stack-grid">
          <article class="landing-stack-card">
            <h3>Linguagens</h3>
            <div class="landing-tags">
              <span class="landing-tag">Python</span>
              <span class="landing-tag">Java</span>
              <span class="landing-tag">JavaScript</span>
              <span class="landing-tag">C / C++</span>
              <span class="landing-tag">PHP</span>
              <span class="landing-tag">SQL</span>
              <span class="landing-tag">HTML</span>
              <span class="landing-tag">CSS</span>
            </div>
          </article>
          <article class="landing-stack-card">
            <h3>Backend</h3>
            <div class="landing-tags">
              <span class="landing-tag">Spring Boot</span>
              <span class="landing-tag">APIs REST</span>
              <span class="landing-tag">Arquitetura em camadas</span>
              <span class="landing-tag">Validação de regras</span>
            </div>
          </article>
          <article class="landing-stack-card">
            <h3>Frontend</h3>
            <div class="landing-tags">
              <span class="landing-tag">HTML semântico</span>
              <span class="landing-tag">CSS responsivo</span>
              <span class="landing-tag">Integração com APIs</span>
            </div>
          </article>
          <article class="landing-stack-card">
            <h3>Bases de dados</h3>
            <div class="landing-tags">
              <span class="landing-tag">PostgreSQL</span>
              <span class="landing-tag">MySQL</span>
              <span class="landing-tag">MariaDB</span>
              <span class="landing-tag">Modelação relacional</span>
            </div>
          </article>
          <article class="landing-stack-card">
            <h3>Ferramentas</h3>
            <div class="landing-tags">
              <span class="landing-tag">Git</span>
              <span class="landing-tag">GitHub</span>
              <span class="landing-tag">Linux</span>
              <span class="landing-tag">Linha de comandos</span>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="landing-section landing-section--alt" id="foco" aria-labelledby="foco-title">
      <div class="landing-section__inner">
        <p class="landing-section__label">Áreas</p>
        <h2 id="foco-title">Foco técnico</h2>
        <p class="landing-section__intro">Onde aplico formação e prática: desenho de sistemas, implementação e melhoria contínua.</p>
        <div class="landing-focus-grid">
          <article class="landing-focus-card">
            <h3>Desenvolvimento de software</h3>
            <p>Ciclo completo desde análise e estruturação até implementação, com atenção a legibilidade, modularidade e manutenção.</p>
          </article>
          <article class="landing-focus-card">
            <h3>Sistemas backend</h3>
            <p>Serviços, APIs e lógica de negócio persistente, com separação clara entre camadas e contratos estáveis.</p>
          </article>
          <article class="landing-focus-card">
            <h3>Aplicações web</h3>
            <p>Interfaces funcionais e responsivas alinhadas com backends reais e fluxos de dados bem definidos.</p>
          </article>
          <article class="landing-focus-card">
            <h3>Bases de dados</h3>
            <p>Esquemas relacionais, integridade, consultas eficientes e integração com aplicações via camadas de acesso a dados.</p>
          </article>
          <article class="landing-focus-card">
            <h3>Sistemas e redes</h3>
            <p>Compreensão de comunicação entre processos, sockets e fundamentos que sustentam arquiteturas cliente-servidor.</p>
          </article>
          <article class="landing-focus-card">
            <h3>Engenharia de software</h3>
            <p>Princípios de desenho, organização do código e raciocínio estruturado para evoluir sistemas com segurança.</p>
          </article>
        </div>
      </div>
    </section>
    <section class="landing-section" id="projetos" aria-labelledby="projetos-title">
      <div class="landing-section__inner">
        <p class="landing-section__label">Trabalho</p>
        <h2 id="projetos-title">Projetos em destaque</h2>
        <p class="landing-section__intro">Sistemas e plataformas que desenvolvi ou co-desenvolvi — com stack e objetivos concretos.</p>
        <div class="landing-carousel" data-landing-carousel>
          <div class="landing-carousel__head">
            <div class="landing-carousel__controls">
              <button type="button" class="landing-carousel__btn" data-carousel-prev aria-label="Projeto anterior">‹</button>
              <button type="button" class="landing-carousel__btn" data-carousel-next aria-label="Projeto seguinte">›</button>
            </div>
          </div>
          <div class="landing-carousel__viewport" role="region" aria-roledescription="carrossel" aria-label="Projetos em destaque" tabindex="0">
            <div class="landing-carousel__track">
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Mobilidade · REST · Reservas</p>
                  <h3>UrbanWheels</h3>
                  <p class="landing-project-card__desc">
                    Plataforma de mobilidade com <strong>backend REST</strong>, gestão de <strong>estações</strong> e <strong>reservas</strong>, integrada a uma base de dados para operações consistentes, disponibilidade de recursos e fluxos de utilização fiáveis.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>REST</span>
                    <span>Modelagem</span>
                    <span>SQL</span>
                    <span>Serviços</span>
                  </div>
                  <a class="landing-btn landing-btn--ghost" href="https://github.com/ravimughal/urbanwheels" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                </div>
              </article>
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Distribuído · Cliente-servidor · Sockets</p>
                  <h3>Distributed Marketplace</h3>
                  <p class="landing-project-card__desc">
                    <strong>Sistema distribuído</strong> com arquitetura <strong>cliente-servidor</strong>, comunicação via <strong>sockets</strong> e processamento estruturado de comandos, com validação de regras entre componentes e coordenação de estado.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>Sockets</span>
                    <span>Protocolo</span>
                    <span>Multiprocesso</span>
                    <span>Regras de negócio</span>
                  </div>
                  <a class="landing-btn landing-btn--ghost" href="https://github.com/ravimughal" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                </div>
              </article>
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Backend · JPA · API</p>
                  <h3>Lispuber</h3>
                  <p class="landing-project-card__desc">
                    Camada de <strong>API backend</strong> com <strong>modelagem de entidades</strong>, <strong>persistência JPA</strong> e <strong>endpoints REST</strong> alinhados ao domínio, priorizando contratos estáveis, integridade de dados e separação de responsabilidades.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>Java</span>
                    <span>JPA</span>
                    <span>REST</span>
                    <span>Persistência</span>
                  </div>
                  <a class="landing-btn landing-btn--ghost" href="https://lispuber.xyz/" target="_blank" rel="noopener noreferrer">Ver Site</a>
                </div>
              </article>
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Ativos digitais · Dados · Operações</p>
                  <h3>CoinCenter</h3>
                  <p class="landing-project-card__desc">
                    Plataforma para <strong>gestão e acompanhamento</strong> de <strong>ativos em criptomoedas</strong>, com foco em <strong>organização de dados</strong>, operações e visão consolidada de posições para suportar decisões e auditoria simplificada.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>Modelagem</span>
                    <span>API / serviços</span>
                    <span>Dados financeiros</span>
                    <span>Git</span>
                  </div>
                  <a class="landing-btn landing-btn--ghost" href="https://github.com/ravimughal/CoinCenter" target="_blank" rel="noopener noreferrer">Repositório</a>
                </div>
              </article>
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Priorização · Fluxos · Decisão</p>
                  <h3>Partos Prioritários</h3>
                  <p class="landing-project-card__desc">
                    Sistema para <strong>gestão e priorização de atendimentos</strong>, com <strong>lógica de decisão</strong> e <strong>organização de fluxos</strong> que ordena filas, reduz ambiguidade operacional e melhora a previsibilidade do serviço.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>Regras</span>
                    <span>Domínio</span>
                    <span>Fluxos</span>
                    <span>Persistência</span>
                  </div>
                  <a class="landing-btn landing-btn--ghost" href="https://github.com/ravimughal/partos-prioritarios" target="_blank" rel="noopener noreferrer">Repositório</a>
                </div>
              </article>
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Catálogo · Aluguer · Utilizadores</p>
                  <h3>Locadora Digital</h3>
                  <p class="landing-project-card__desc">
                    Sistema de <strong>gestão de catálogo</strong>, <strong>aluguer</strong> e <strong>controlo de utilizadores</strong>, com regras de empréstimo, rastreio de disponibilidade e operações administrativas num único fluxo coerente.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>CRUD</span>
                    <span>SQL</span>
                    <span>Autenticação</span>
                    <span>Domínio</span>
                  </div>
                  <a class="landing-btn landing-btn--ghost" href="https://github.com/ravimughal/locadora-de-filme" target="_blank" rel="noopener noreferrer">Repositório</a>
                </div>
              </article>
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Distribuição · Conteúdo · Operações</p>
                  <h3>Newsletter System</h3>
                  <p class="landing-project-card__desc">
                    Sistema de <strong>envio e gestão de newsletters</strong>, orientado à <strong>distribuição de conteúdo</strong>, gestão de listas e execução repetível de campanhas com foco em consistência e rastreio operacional.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>Backend</span>
                    <span>Email</span>
                    <span>Automação</span>
                    <span>Dados</span>
                  </div>
                  <a class="landing-btn landing-btn--ghost" href="https://github.com/ravimughal/newsletter" target="_blank" rel="noopener noreferrer">Repositório</a>
                </div>
              </article>
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Segurança · Percursos · Operações</p>
                  <h3>SafeLevadas</h3>
                  <p class="landing-project-card__desc">
                    Aplicação focada em <strong>segurança</strong> e <strong>gestão de percursos e atividades</strong>, reunindo informação contextual, organização de rotas e apoio a operações em campo com interface clara para utilizadores.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>Web / mobile-ready</span>
                    <span>UX</span>
                    <span>Dados</span>
                    <span>Git</span>
                  </div>
                  <a class="landing-btn landing-btn--ghost" href="https://github.com/ravimughal/safeLevadas" target="_blank" rel="noopener noreferrer">Repositório</a>
                </div>
              </article>
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Presença web · Conteúdo técnico</p>
                  <h3>Personal Portfolio</h3>
                  <p class="landing-project-card__desc">
                    Plataforma web para <strong>apresentação de projetos</strong> e <strong>conteúdo técnico</strong>, com hierarquia visual cuidada, secções dedicadas e evolução contínua alinhada à prática de engenharia e escrita técnica.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>Jekyll</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>GitHub Pages</span>
                  </div>
                  <a class="landing-btn landing-btn--ghost" href="{{ '/projects/' | relative_url }}">Explorar projetos no site</a>
                </div>
              </article>
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Segurança · Ficheiros · Identidade</p>
                  <span class="landing-project-card__flag">Em desenvolvimento</span>
                  <h3>MySaúde</h3>
                  <p class="landing-project-card__desc">
                    Sistema com <strong>encriptação</strong>, <strong>assinatura digital</strong> e <strong>gestão de ficheiros</strong>, desenhado para cenários que exigem confidencialidade, integridade e trilhos claros de custódia de informação sensível.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>Criptografia</span>
                    <span>Assinatura</span>
                    <span>Armazenamento</span>
                    <span>Segurança</span>
                  </div>
                  <span class="landing-project-card__cta-muted">Repositório em breve</span>
                </div>
              </article>
              <article class="landing-carousel__slide">
                <div class="landing-project-card">
                  <p class="landing-project-card__meta">Modelos · Validação · Dados</p>
                  <span class="landing-project-card__flag">Em desenvolvimento</span>
                  <h3>Machine Learning Lab</h3>
                  <p class="landing-project-card__desc">
                    Conjunto de iniciativas em <strong>regressão</strong>, <strong>validação de modelos</strong> e <strong>análise de dados</strong>, com ênfase em métricas, generalização e interpretação criteriosa dos resultados em problemas reais.
                  </p>
                  <div class="landing-project-card__tech">
                    <span>Python</span>
                    <span>ML</span>
                    <span>Estatística</span>
                    <span>Experimentação</span>
                  </div>
                  <span class="landing-project-card__cta-muted">Repositório em breve</span>
                </div>
              </article>
            </div>
          </div>
          <div class="landing-carousel__dots" role="group" aria-label="Índice de projetos do carrossel"></div>
        </div>
      </div>
    </section>
    <section class="landing-section landing-section--alt" id="qualidades" aria-labelledby="qualidades-title">
      <div class="landing-section__inner">
        <p class="landing-section__label">Como trabalho</p>
        <h2 id="qualidades-title">Pontos fortes</h2>
        <p class="landing-section__intro">Competências transversais que aplico em equipa e em trabalho autónomo.</p>
        <div class="landing-strengths-grid">
          <article class="landing-strength-card">
            <h3>Pensamento estruturado</h3>
            <p>Decomponho problemas em partes geríveis, defino interfaces entre módulos e mantenho o raciocínio alinhado com o desenho do sistema.</p>
          </article>
          <article class="landing-strength-card">
            <h3>Resolução de problemas</h3>
            <p>Investigo causas raiz, testo hipóteses e itero até encontrar soluções estáveis — desde depuração até refatoração orientada a objetivos.</p>
          </article>
          <article class="landing-strength-card">
            <h3>Aprendizagem contínua</h3>
            <p>Atualizo-me em stack e boas práticas, experimento em projetos próprios e incorporo feedback de forma sistemática.</p>
          </article>
          <article class="landing-strength-card">
            <h3>Comunicação</h3>
            <p>Explico decisões técnicas com clareza, documento onde faz sentido e facilito alinhamento entre código, requisitos e stakeholders.</p>
          </article>
        </div>
      </div>
    </section>
    <footer class="landing-footer" id="contacto">
      <div class="landing-footer__inner">
        <h2>Contacto</h2>
        <p class="landing-footer__tagline">Vamos falar sobre software, sistemas ou oportunidades em TI.</p>
        <div class="landing-footer__links">
          <a href="https://github.com/ravimughal" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ravimughal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="{{ '/blog/' | relative_url }}">Blog</a>
          <a href="mailto:{{ site.email }}">Email</a>
        </div>
        <p class="landing-footer__closing">«Código limpo, contratos claros, sistemas que respondem ao mundo real.»</p>
        <p class="landing-footer__copy">© {{ site.time | date: '%Y' }} Ravi Mughal · FCUL</p>
      </div>
    </footer>
  </main>
  <script>
    (function () {
      var root = document.querySelector("[data-landing-carousel]");
      if (!root) return;
      var view = root.querySelector(".landing-carousel__viewport");
      var track = root.querySelector(".landing-carousel__track");
      var slides = root.querySelectorAll(".landing-carousel__slide");
      var prev = root.querySelector("[data-carousel-prev]");
      var next = root.querySelector("[data-carousel-next]");
      var dotsWrap = root.querySelector(".landing-carousel__dots");
      if (!view || !track || !slides.length || !prev || !next || !dotsWrap) return;
      var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      function gapSize() {
        var g = getComputedStyle(track).gap || getComputedStyle(track).columnGap;
        return parseFloat(g, 10) || 20;
      }
      function slideStep() {
        var el = slides[0];
        return el ? el.getBoundingClientRect().width + gapSize() : 400;
      }
      function maxScroll() {
        return Math.max(0, view.scrollWidth - view.clientWidth);
      }
      function updateButtons() {
        var max = maxScroll();
        var sl = view.scrollLeft;
        prev.disabled = sl <= 1;
        next.disabled = sl >= max - 1;
      }
      function setActiveDot(index) {
        var dots = dotsWrap.querySelectorAll(".landing-carousel__dot");
        dots.forEach(function (d, j) {
          var on = j === index;
          d.classList.toggle("landing-carousel__dot--active", on);
          d.setAttribute("aria-current", on ? "true" : "false");
        });
      }
      function nearestIndex() {
        var center = view.scrollLeft + view.clientWidth / 2;
        var best = 0;
        var bestDist = Infinity;
        for (var i = 0; i < slides.length; i++) {
          var s = slides[i];
          var mid = s.offsetLeft + s.offsetWidth / 2;
          var d = Math.abs(mid - center);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        }
        return best;
      }
      function scrollByStep(dir) {
        view.scrollBy({
          left: dir * slideStep(),
          behavior: reducedMotion ? "auto" : "smooth"
        });
      }
      prev.addEventListener("click", function () {
        scrollByStep(-1);
      });
      next.addEventListener("click", function () {
        scrollByStep(1);
      });
      slides.forEach(function (slide, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "landing-carousel__dot" + (i === 0 ? " landing-carousel__dot--active" : "");
        dot.setAttribute("aria-label", "Ir para o projeto " + (i + 1) + " de " + slides.length);
        dot.setAttribute("aria-current", i === 0 ? "true" : "false");
        dot.addEventListener("click", function () {
          slide.scrollIntoView({
            behavior: reducedMotion ? "auto" : "smooth",
            block: "nearest",
            inline: "start"
          });
        });
        dotsWrap.appendChild(dot);
      });
      view.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          scrollByStep(-1);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          scrollByStep(1);
        }
      });
      var scrollTimer;
      view.addEventListener("scroll", function () {
        window.clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(function () {
          updateButtons();
          setActiveDot(nearestIndex());
        }, 60);
      });
      window.addEventListener("resize", function () {
        updateButtons();
        setActiveDot(nearestIndex());
      });
      updateButtons();
    })();
  </script>

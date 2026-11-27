---
layout: home
hero:
  name: Creative+ <span class="hero-accent">Docs</span>
  text: Технический справочник по визуальному кодингу
  tagline: Разбирай блоки, понимай логику их работы и собирай собственные игровые механики в Mineland Creative+.
  image:
    src: /hero-visual.svg
    alt: Схема визуальной логики — событие, условие и действие
  actions:
    - theme: brand
      text: Перейти к разделам
      link: '#catalog'
    - theme: alt
      text: Как устроен справочник
      link: '#workflow'
features:
  - title: Блоки и их параметры
    details: Назначение, аргументы, настройки и особенности работы каждого блока.
    link: '#catalog'
    linkText: Смотреть каталог
  - title: Логика и данные
    details: События, условия, переменные, выбор целей и коллекции — в одной системе.
    link: '#principles'
    linkText: Основные понятия
  - title: Практические схемы
    details: Разборы связок блоков, которые помогают перейти от идеи к работающей механике.
    link: '#workflow'
    linkText: Как учиться
---

<div class="home-after-hero">
  <div class="status-strip">
    <div class="status-item"><span class="status-dot"></span><span>MINELAND CREATIVE+</span></div>
    <div class="status-item"><span class="status-label">СРЕДА</span><span>MINECRAFT 1.21.11</span></div>
    <div class="status-item"><span class="status-label">ФОРМАТ</span><span>ВИЗУАЛЬНЫЙ КОД</span></div>
  </div>

  <section id="catalog" class="doc-section">
    <div class="section-heading">
      <div>
        <p class="eyebrow">01 / KNOWLEDGE BASE</p>
        <h2>Разделы документации</h2>
      </div>
      <p class="section-note">Отдельные элементы редактора и фундаментальные понятия, из которых складывается код.</p>
    </div>

    <div class="catalog-grid">
      <a class="catalog-card card-event" href="#principles">
        <span class="card-index">01</span><span class="card-symbol">↳</span>
        <h3>События</h3>
        <p>Точки запуска кода: действия игроков, сущностей и события мира.</p>
        <span class="card-foot">EVENTS <span>↗</span></span>
      </a>
      <a class="catalog-card card-action" href="#principles">
        <span class="card-index">02</span><span class="card-symbol">▣</span>
        <h3>Действия</h3>
        <p>Команды для игроков, сущностей, мира и игровых объектов.</p>
        <span class="card-foot">ACTIONS <span>↗</span></span>
      </a>
      <a class="catalog-card card-condition" href="#principles">
        <span class="card-index">03</span><span class="card-symbol">◇</span>
        <h3>Условия</h3>
        <p>Проверки, ветвления и логика принятия решений.</p>
        <span class="card-foot">CONDITIONS <span>↗</span></span>
      </a>
      <a class="catalog-card card-target" href="#principles">
        <span class="card-index">04</span><span class="card-symbol">◎</span>
        <h3>Выбор целей</h3>
        <p>Выбор игроков и сущностей, фильтрация и управление выборкой.</p>
        <span class="card-foot">SELECTIONS <span>↗</span></span>
      </a>
      <a class="catalog-card card-variable" href="#principles">
        <span class="card-index">05</span><span class="card-symbol">{ }</span>
        <h3>Переменные</h3>
        <p>Хранение значений, получение данных и операции над ними.</p>
        <span class="card-foot">VARIABLES <span>↗</span></span>
      </a>
      <a class="catalog-card card-collection" href="#principles">
        <span class="card-index">06</span><span class="card-symbol">▤</span>
        <h3>Коллекции</h3>
        <p>Списки, словари и множества для работы с группами данных.</p>
        <span class="card-foot">COLLECTIONS <span>↗</span></span>
      </a>
      <a class="catalog-card card-control" href="#principles">
        <span class="card-index">07</span><span class="card-symbol">⏵</span>
        <h3>Управление кодом</h3>
        <p>Ожидания, циклы, функции и порядок выполнения блоков.</p>
        <span class="card-foot">CONTROL FLOW <span>↗</span></span>
      </a>
      <a class="catalog-card card-values" href="#principles">
        <span class="card-index">08</span><span class="card-symbol">⌘</span>
        <h3>Игровые значения</h3>
        <p>Данные об игроках, мире, сущностях и текущем состоянии игры.</p>
        <span class="card-foot">GAME VALUES <span>↗</span></span>
      </a>
    </div>
    <p class="catalog-footnote"><span>В РАЗРАБОТКЕ</span> Каталог будет постепенно наполняться подробными статьями по каждому семейству блоков.</p>
  </section>

  <section id="workflow" class="workflow-section">
    <div class="section-heading">
      <div>
        <p class="eyebrow">02 / HOW TO USE</p>
        <h2>Как устроена статья</h2>
      </div>
      <p class="section-note">Каждая статья должна помогать не просто найти блок, а понять, как применять его в редакторе.</p>
    </div>
    <div class="workflow-grid">
      <div class="workflow-step"><span class="step-number">01</span><div><h3>Назначение</h3><p>Что делает блок и в каких ситуациях он нужен.</p></div></div>
      <div class="workflow-step"><span class="step-number">02</span><div><h3>Параметры</h3><p>Аргументы, доступные варианты, переключатели и ограничения.</p></div></div>
      <div class="workflow-step"><span class="step-number">03</span><div><h3>Применение</h3><p>Как блок взаимодействует с другими элементами редактора.</p></div></div>
      <div class="workflow-step"><span class="step-number">04</span><div><h3>Примеры</h3><p>Наглядные последовательности блоков для игровых механик.</p></div></div>
    </div>
  </section>

  <section id="principles" class="principles-section">
    <div class="principles-copy">
      <p class="eyebrow">03 / FOUNDATION</p>
      <h2>Сначала логика.<br><span>Потом механика.</span></h2>
      <p>Код Creative+ строится из обработчиков и расположенных в определённом порядке блоков. Чтобы разобраться в сложной механике, важно понимать не только отдельные действия, но и то, как они связаны между собой.</p>
    </div>
    <div class="principles-list">
      <div><span class="mini-tag tag-cyan">EVENT</span><p><strong>Событие</strong><small>Определяет, когда запускается обработчик.</small></p></div>
      <div><span class="mini-tag tag-gold">LOGIC</span><p><strong>Условие и выбор</strong><small>Определяют, для кого и при каких обстоятельствах выполняется код.</small></p></div>
      <div><span class="mini-tag tag-violet">ACTION</span><p><strong>Действие</strong><small>Выполняет нужную операцию в игре.</small></p></div>
    </div>
  </section>

  <section id="about" class="about-section">
    <div class="about-mark">C<span>+</span></div>
    <div>
      <p class="eyebrow">04 / ABOUT THIS PROJECT</p>
      <h2>Документация, которую удобно читать и развивать.</h2>
      <p>Creative+ Docs — структурированный справочник по визуальному кодингу Mineland Creative+. Материалы готовятся на основе описания блоков и поведения системы для Minecraft 1.21.11. Неизвестные или неподтверждённые детали не должны подменяться догадками.</p>
    </div>
  </section>

  <div class="home-bottomline"><span>CREATIVE+ DOCS</span><span>BUILD · TEST · CREATE</span><span>01 — 04</span></div>
</div>

---
layout: home
title: Creative+ Docs
---

<div class="landing">
  <section class="intro-shell">
    <div class="intro-copy">
      <div class="intro-kicker"><span class="kicker-line"></span> MINELAND / CREATIVE+ / KNOWLEDGE BASE</div>
      <h1>Понимай код.<br><span>Создавай больше.</span></h1>
      <p class="intro-lead">Техническая документация по визуальному редактору Creative+ — от отдельных блоков до сложных игровых механик.</p>
      <div class="intro-actions">
        <a class="action-primary" href="/creative-plus-docs/guide/">Открыть документацию <span>↗</span></a>
        <a class="action-secondary" href="#catalog">Посмотреть разделы</a>
      </div>
      <div class="intro-meta"><span><i class="meta-dot"></i> СПРАВОЧНИК РАЗРАБОТЧИКА</span><span>РУССКИЙ ЯЗЫК</span></div>
    </div>

    <div class="visual-panel" aria-label="Схема визуального кода: событие, условие, действие">
      <div class="visual-topbar"><div class="window-dots"><i></i><i></i><i></i></div><span>LOGIC BUILDER</span><span class="visual-version">CREATIVE+</span></div>
      <div class="visual-canvas">
        <div class="flow-line line-one"></div><div class="flow-line line-two"></div><div class="flow-line line-three"></div>
        <div class="logic-node node-event"><span class="node-icon">↳</span><div><small>СОБЫТИЕ</small><strong>Игрок присоединился</strong></div><b>01</b></div>
        <div class="logic-branch">
          <div class="logic-node node-condition"><span class="node-icon">◇</span><div><small>УСЛОВИЕ</small><strong>Проверить состояние</strong></div><b>02</b></div>
          <div class="logic-node node-action"><span class="node-icon">▣</span><div><small>ДЕЙСТВИЕ</small><strong>Отправить сообщение</strong></div><b>03</b></div>
        </div>
        <div class="visual-bottom"><span class="bottom-mark">C<span>+</span></span><div><small>ВИЗУАЛЬНОЕ ПРОГРАММИРОВАНИЕ</small><strong>Собирай логику из блоков</strong></div><span class="bottom-arrow">↗</span></div>
      </div>
      <div class="visual-caption"><span>01 — EVENT</span><span>02 — CONDITION</span><span>03 — ACTION</span></div>
    </div>
  </section>

  <div class="quick-facts">
    <div><span class="fact-index">01</span><span><b>Блоки редактора</b><small>Назначение и параметры</small></span></div>
    <div><span class="fact-index">02</span><span><b>Логика работы</b><small>Связи и порядок выполнения</small></span></div>
    <div><span class="fact-index">03</span><span><b>Практика</b><small>Примеры игровых механик</small></span></div>
  </div>

  <section id="catalog" class="landing-section catalog-section">
    <div class="section-head">
      <div><div class="section-kicker">01 / КАТАЛОГ</div><h2>Найди нужный блок</h2></div>
      <p>Документация организована по назначению блоков. Выбери категорию, чтобы перейти к её описанию.</p>
    </div>
    <div class="catalog-list">
      <a class="catalog-item tone-event" href="/creative-plus-docs/guide/events/"><span class="catalog-number">01</span><span class="catalog-icon">↳</span><span class="catalog-text"><b>События</b><small>Что запускает выполнение кода: игроки, сущности и мир.</small></span><span class="catalog-arrow">↗</span></a>
      <a class="catalog-item tone-action" href="/creative-plus-docs/guide/actions/"><span class="catalog-number">02</span><span class="catalog-icon">▣</span><span class="catalog-text"><b>Действия</b><small>Команды для игроков, сущностей и игрового мира.</small></span><span class="catalog-arrow">↗</span></a>
      <a class="catalog-item tone-condition" href="/creative-plus-docs/guide/conditions/"><span class="catalog-number">03</span><span class="catalog-icon">◇</span><span class="catalog-text"><b>Условия</b><small>Проверки, сравнения и ветвление логики.</small></span><span class="catalog-arrow">↗</span></a>
      <a class="catalog-item tone-selection" href="/creative-plus-docs/guide/selection/"><span class="catalog-number">04</span><span class="catalog-icon">◎</span><span class="catalog-text"><b>Выбор целей</b><small>Выбор игроков и сущностей, фильтрация и группы целей.</small></span><span class="catalog-arrow">↗</span></a>
      <a class="catalog-item tone-variable" href="/creative-plus-docs/guide/variables/"><span class="catalog-number">05</span><span class="catalog-icon">{ }</span><span class="catalog-text"><b>Переменные</b><small>Хранение, изменение и получение значений.</small></span><span class="catalog-arrow">↗</span></a>
      <a class="catalog-item tone-collection" href="/creative-plus-docs/guide/collections/"><span class="catalog-number">06</span><span class="catalog-icon">▤</span><span class="catalog-text"><b>Коллекции</b><small>Списки, словари и множества для работы с данными.</small></span><span class="catalog-arrow">↗</span></a>
      <a class="catalog-item tone-control" href="/creative-plus-docs/guide/control-flow/"><span class="catalog-number">07</span><span class="catalog-icon">⏵</span><span class="catalog-text"><b>Управление кодом</b><small>Ожидания, циклы, функции и порядок выполнения.</small></span><span class="catalog-arrow">↗</span></a>
      <a class="catalog-item tone-values" href="/creative-plus-docs/guide/game-values/"><span class="catalog-number">08</span><span class="catalog-icon">⌘</span><span class="catalog-text"><b>Игровые значения</b><small>Данные об игроках, мире и сущностях.</small></span><span class="catalog-arrow">↗</span></a>
    </div>
    <div class="catalog-note"><span class="note-mark">i</span><span>Справочник наполняется. В категориях, где статьи ещё не опубликованы, это будет отмечено отдельно.</span></div>
  </section>

  <section class="landing-section method-section">
    <div class="section-head">
      <div><div class="section-kicker">02 / СТРУКТУРА</div><h2>Не просто список блоков</h2></div>
      <p>Каждая статья должна объяснять, как пользоваться блоком непосредственно в редакторе Creative+.</p>
    </div>
    <div class="method-grid">
      <article><span class="method-no">A</span><h3>Назначение</h3><p>Для чего нужен блок и в каких случаях его использовать.</p></article>
      <article><span class="method-no">B</span><h3>Параметры</h3><p>Аргументы, доступные варианты, переключатели и типы значений.</p></article>
      <article><span class="method-no">C</span><h3>Особенности</h3><p>Ограничения, взаимодействия с другими блоками и важные нюансы.</p></article>
      <article><span class="method-no">D</span><h3>Примеры</h3><p>Понятные схемы сборки механик из визуальных блоков.</p></article>
    </div>
  </section>

  <section class="closing-panel">
    <div class="closing-symbol">C<span>+</span></div>
    <div class="closing-copy"><div class="section-kicker">03 / О ПРОЕКТЕ</div><h2>От первого блока<br>до целой игры.</h2><p>Creative+ Docs — независимый справочник по визуальному кодингу Mineland Creative+. Его цель — собрать знания о редакторе в одном месте и сделать их понятными как начинающим, так и опытным разработчикам.</p></div>
    <a href="/creative-plus-docs/guide/" class="closing-link">Начать изучение <span>↗</span></a>
  </section>

  <div class="landing-footer"><span>CREATIVE+ DOCS</span><span>MINELAND CREATIVE+ / DEVELOPER REFERENCE</span><span>BUILD · TEST · CREATE</span></div>
</div>

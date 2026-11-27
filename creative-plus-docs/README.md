# Creative+ Docs — главная страница

Стартовый проект на VitePress с главной страницей технической документации по визуальному кодингу Mineland Creative+.

## Запуск локально

```bash
npm install
npm run docs:dev
```

Открой адрес, который покажет VitePress в терминале (обычно `http://localhost:5173`).

## Сборка сайта

```bash
npm run docs:build
npm run docs:preview
```

## Где редактировать

- `index.md` — содержание главной страницы.
- `.vitepress/theme/style.css` — оформление и адаптивность.
- `.vitepress/config.mts` — название сайта, навигация, поиск и подвал.
- `public/hero-visual.svg` — иллюстрация на первом экране.
- `public/logo.svg` — логотип.

Разделы каталога на главной пока являются обзорными карточками. По мере подготовки статей их можно связать с отдельными страницами документации.


## Публикация через GitHub Pages

Проект подготовлен для GitHub Pages. Создайте публичный репозиторий с точным названием `creative-plus-docs`, загрузите в него содержимое этой папки и используйте ветку `main`. Затем откройте `Settings → Pages` и в поле `Build and deployment → Source` выберите `GitHub Actions`. Workflow в `.github/workflows/deploy.yml` соберёт и опубликует сайт автоматически.

Адрес сайта будет иметь вид `https://ВАШ-ЛОГИН.github.io/creative-plus-docs/`. Если репозиторий будет называться иначе, измените `base` в `.vitepress/config.mts` на `'/ИМЯ-РЕПОЗИТОРИЯ/'`. Для собственного домена `base` обычно нужно изменить на `'/'` и отдельно настроить домен в GitHub Pages.

# Creative+ Docs

Сайт документации по визуальному кодингу Mineland Creative+, собранный на VitePress.

## Локальный запуск

Требуется Node.js 20 или новее.

```bash
npm install
npm run docs:dev
```

Открой адрес, который покажет VitePress (обычно `http://localhost:5173/creative-plus-docs/`).

## Проверка и сборка

```bash
npm run docs:build
npm run docs:preview
```

Готовый статический сайт появится в `.vitepress/dist`.

## Публикация на GitHub Pages

1. Создай публичный репозиторий с названием `creative-plus-docs`.
2. Загрузи в него содержимое этой папки.
3. В настройках репозитория открой **Settings → Pages**.
4. В **Build and deployment → Source** выбери **GitHub Actions**.
5. Отправь изменения в ветку `main`. Workflow из `.github/workflows/deploy.yml` соберёт и опубликует сайт.

Адрес при стандартной настройке: `https://<твой-логин>.github.io/creative-plus-docs/`.

Если название репозитория или адрес сайта изменится, обнови `base` в `.vitepress/config.mts` и абсолютные ссылки в главной странице.

## Структура

- `index.md` — главная страница.
- `guide/` — статьи и категории документации.
- `.vitepress/config.mts` — навигация, поиск и настройки VitePress.
- `.vitepress/theme/style.css` — оформление сайта.
- `public/` — логотип и статические ресурсы.

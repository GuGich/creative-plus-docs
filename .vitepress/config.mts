import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/creative-plus-docs/',
  // Load the theme stylesheet as a public asset, not only through the theme bundle.
  // This keeps GitHub Pages asset resolution explicit and easy to verify.
  head: [
    ['link', { rel: 'stylesheet', href: '/creative-plus-docs/creative-plus.css?v=20261127-2' }]
  ],
  lang: 'ru-RU',
  title: 'Creative+ Docs',
  description: 'Справочник по визуальному кодингу Mineland Creative+.',
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'CREATIVE+ DOCS',
    logo: '/logo.svg',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Документация', link: '/guide/' },
      { text: 'Каталог блоков', link: '/guide/#catalog' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Начало работы',
          items: [
            { text: 'Обзор документации', link: '/guide/' },
            { text: 'Основы кодинга', link: '/guide/getting-started' }
          ]
        },
        {
          text: 'Блоки редактора',
          collapsed: false,
          items: [
            { text: 'События', link: '/guide/events/' },
            { text: 'Действия', link: '/guide/actions/' },
            { text: 'Условия', link: '/guide/conditions/' },
            { text: 'Выбор целей', link: '/guide/selection/' },
            { text: 'Переменные', link: '/guide/variables/' },
            { text: 'Коллекции', link: '/guide/collections/' },
            { text: 'Управление кодом', link: '/guide/control-flow/' },
            { text: 'Игровые значения', link: '/guide/game-values/' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск по документации' },
              modal: {
                noResultsText: 'Ничего не найдено',
                resetButtonTitle: 'Сбросить поиск',
                footer: { selectText: 'Выбрать', navigateText: 'Перейти', closeText: 'Закрыть' }
              }
            }
          }
        }
      }
    },
    outline: { label: 'На этой странице' },
    docFooter: { prev: 'Предыдущая страница', next: 'Следующая страница' },
    footer: {
      message: 'Справочник по визуальному кодингу Mineland Creative+.',
      copyright: 'Creative+ Docs'
    }
  }
})

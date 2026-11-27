import { defineConfig } from 'vitepress'

export default defineConfig({
  // GitHub Pages: repository must be named creative-plus-docs.
  base: '/creative-plus-docs/',
  lang: 'ru-RU',
  title: 'Creative+ Docs',
  description: 'Технический справочник по визуальному кодингу Mineland Creative+.',
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'CREATIVE+ <span class="brand-mark">DOCS</span>',
    logo: '/logo.svg',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Каталог', link: '/#catalog' },
      { text: 'Как пользоваться', link: '/#workflow' },
      { text: 'О проекте', link: '/#about' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск по документации'
          },
          modal: {
            noResultsText: 'Ничего не найдено',
            resetButtonTitle: 'Сбросить поиск',
            footer: {
              selectText: 'Выбрать',
              navigateText: 'Перейти',
              closeText: 'Закрыть'
            }
          }
        }
      }
    },
    outline: {
      label: 'На этой странице'
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    footer: {
      message: 'Справочник по визуальному кодингу Mineland Creative+.',
      copyright: 'Creative+ Docs · Minecraft 1.21.11'
    }
  }
})

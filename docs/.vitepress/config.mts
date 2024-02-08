import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VueXYZ",
  description: "Creative coding composables for Vue 3",
  lang: 'en-US',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Simon Le Marchant' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'true',
      },
    ],
    [
      'link',
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Homemade+Apple&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap',
        as: 'style',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Homemade+Apple&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap',
      },
    ],
    [
      'script',
      {
        src: 'https://kit.fontawesome.com/e8fc98b790.js',
        crossorigin: 'anonymous',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@marchantweb' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: "theme-color", content: "#0866D2"}],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/icon.svg"}]
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',

    nav: [
      { text: 'Demos', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Demos',
        items: [
          { text: 'Basic Primitives', link: '/demo/basic-primitives' },
        ]
      },
      {
        text: 'Primitives',
        items: [
          { text: 'useCircle', link: '/primitives/usecircle' },
          { text: 'useTriangle', link: '/primitives/usetriangle' },
          { text: 'useLine', link: '/primitives/useline' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/marchantweb/vuexyz' },
      { icon: 'discord', link: 'https://discord.gg/hKyfDAddsK' },
      { icon: 'twitter', link: 'https://twitter.com/marchantweb' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Simon Le Marchant and contributors',
    },
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VueXYZ",
  description: "Creative coding composables for Vue 3",
  head: [
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
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

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
          { text: 'Circles', link: '/' },
          { text: 'Triangles', link: '/' },
          { text: 'Squares', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/marchantweb/vuexyz' }
    ]
  }
})

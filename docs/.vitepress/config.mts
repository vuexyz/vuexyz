import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "VueXYZ",
    description: "Creative coding composables for Vue 3",
    lang: 'en-US',
    ignoreDeadLinks: true,
    head: [
        ['link', {rel: 'icon', href: '/icon.svg', type: 'image/svg+xml'}],
        ['meta', {name: 'author', content: 'Simon Le Marchant'}],
        ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
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
        ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
        ['meta', {name: 'twitter:creator', content: '@marchantweb'}],
        ['meta', {name: 'og:image', content: 'https://vuexyz.org/cover.png'}],
        ['meta', {name: 'twitter:image', content: 'https://vuexyz.org/cover.png'}],
        ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover'}],
        ['meta', {name: "theme-color", content: "#0866D2"}],
        ['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/icon.svg"}]
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
            {text: 'Demos', link: '/demo/mouse-position'},
            {text: 'Getting Started', link: '/getting-started'},
        ],

        search: {
            provider: 'local'
        },

        sidebar: [
            {
                text: 'Guide',
                items: [
                    {text: 'Getting Started', link: '/getting-started'},
                    {text: 'Creating Primitives', link: '/creating-primitives'},
                    {text: 'Using Primitive Data', link: '/using-primitive-data'},
                    {text: 'Utility Composables', link: '/utility-composables'},
                    {text: 'Rendering', link: '/rendering'}
                ]
            },
            {
                text: 'Demos',
                items: [
                    {text: 'Basic Primitives', link: '/demo/basic-primitives'},
                    {text: 'Mouse Position', link: '/demo/mouse-position'},
                    {text: 'Canvas Rendering', link: '/demo/canvas-rendering'},
                    {text: 'Interpolate Vertex', link: '/demo/lerp-vertex'},
                    {text: 'Logo Rings', link: '/demo/logo-rings'},
                    {text: 'Point On Primitive', link: '/demo/point-on-primitive'},
                ]
            },
            {
                text: 'Primitives',
                items: [
                    {text: 'useArc', link: '/primitives/useArc'},
                    {text: 'useBezierCurve', link: '/primitives/useBezierCurve'},
                    {text: 'useCircle', link: '/primitives/useCircle'},
                    {text: 'useEllipse', link: '/primitives/useEllipse'},
                    {text: 'useHeptagon', link: '/primitives/useHeptagon'},
                    {text: 'useHexagon', link: '/primitives/useHexagon'},
                    {text: 'useLine', link: '/primitives/useLine'},
                    {text: 'useOctagon', link: '/primitives/useOctagon'},
                    {text: 'usePentagon', link: '/primitives/usePentagon'},
                    {text: 'usePolygon', link: '/primitives/usePolygon'},
                    {text: 'useRectangle', link: '/primitives/useRectangle'},
                    {text: 'useSquare', link: '/primitives/useSquare'},
                    {text: 'useTriangle', link: '/primitives/useTriangle'},
                ]
            },
            {
                text: 'Utilities',
                items: [
                    {text: 'useEdgeLength', link: '/utilities/useEdgeLength'},
                    {text: 'useEdgeMidpoint', link: '/utilities/useEdgeMidpoint'},
                    {text: 'useLerpVertex', link: '/utilities/useLerpVertex'},
                    {text: 'usePointOnEdge', link: '/utilities/usePointOnEdge'},
                    {text: 'usePointOnPrimitive', link: '/utilities/usePointOnPrimitive'},
                    {text: 'useStyleTransform', link: '/utilities/useStyleTransform'},
                    {text: 'useVertexAngle', link: '/utilities/useVertexAngle'},
                ]
            },
            {text: 'Contributing', link: '/contributing'}
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/marchantweb/vuexyz'},
            {icon: 'discord', link: 'https://discord.gg/hKyfDAddsK'},
            {icon: 'twitter', link: 'https://twitter.com/marchantweb'},
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024 Simon Le Marchant and contributors',
        },
    }
})

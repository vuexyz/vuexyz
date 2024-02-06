# Getting Started

### What is VueXYZ?

**VueXYZ is a collection of Vue composables for creative coding.** Unlike other creative coding libraries that simplify rendering to a canvas, VueXYZ doesn't render anything for you. Instead, the composables return data/methods that you can use as you see fit.

_For example:_ instead of `useTriangle` rendering a triangle, it returns the vertices, edges, and faces of the triangle as `refs` _(along with a bunch of other data)_. You can then use this data to render the triangle yourself _(canvas, SVG, WebGL, image mask, etc.)_, to position DOM elements with CSS, or in many other creative ways.

## Installation

::: code-group

```bash [pnpm]
pnpm add vuexyz
```

```bash [npm]
npm install vuexyz
```

```bash [yarn]
yarn add vuexyz
```

:::

The `vuexyz` package is the only package you need to install to get started with VueXYZ. It contains the core composables and utilities that you can use to build your creative coding projects.

# Getting Started

### What is VueXYZ?

**VueXYZ is a collection of Vue composables for creative coding.** Unlike other creative coding libraries that simplify and abstract canvas rendering, VueXYZ doesn't render anything for you. Instead, the composables return data and methods that you can use to render your own elements as you see fit.

_For example:_ instead of rendering a triangle when you call `useTriangle`, VueXYZ returns the vertices, edges, and faces of the triangle as `refs`. You can then use this data to render the triangle using the canvas API, WebGL, or any other rendering library. Or you could plug those values into any other JS logic you want with full reactivity.

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

# Getting Started

### What is VueXYZ?

![cover.png](/cover.png)

**VueXYZ is a collection of Vue composables for creative coding.** Unlike other creative coding libraries that simplify rendering to a canvas, VueXYZ doesn't render anything for you. Instead, the composables return reactive data that you can use as you see fit.

You may decide to take the data and render it to canvas or SVG, or you might use it to drive animations, or anything else. You could chain multiple composables together to create complex shapes or compounded effects. The choice is yours.

#### For example:

```js
const { vertices, edges, faces } = useTriangle({ sideLength: 100})

// vertices: [ { x, y, z }, { x, y, z }, { x, y, z } ... ]
```

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

# VueXYZ

![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/vuexyz/vuexyz?label=current%20version)

![cover.png](https://github.com/vuexyz/vuexyz/raw/main/docs%2Fpublic%2Fcover.png)

### VueXYZ is a collection of Vue 3 composables for creative coding.

VueXYZ is a collection of Vue composables for creative coding. Unlike other creative coding libraries that simplify rendering to a canvas, VueXYZ doesn't render anything for you. Instead, the composables return reactive data that you can use as you see fit.

You may decide to take the data and render it to canvas or SVG, or you might use it to drive animations, or anything else. You could chain multiple composables together to create complex shapes or compounded effects. The choice is yours.

### Documentation: https://vuexyz.org

## 🚀 Features

- 💎 All common 2D primitives like circles, triangles, pentagons, etc.
- ✨ Additional non-polygonal primitives like arcs, bézier curves, etc.
- 📐 Composables return reactive data for `vertices`, `edges`, `faces`, etc.
- 🎛️ Utility methods for rendering, positioning, and transforming primitives.
- 🔥 Built for the **Vue 3 Composition API**.
- ⚡ **Fully tree shakeable**: Only use the composables you care about.
- 📒 Type strong with **TypeScript**.
- 🎨 Detailed [documentation & interactive demos](https://vuexyz.org) for all primitives.

## Example Usage

```js
const { vertices, edges, faces } = useTriangle({ sideLength: 100})

// vertices: [ { x, y, z }, { x, y, z }, { x, y, z } ... ]
```

## 📦 Install

Install VueXYZ with just a single line in your project:

```bash
npm install vuexyz
```

## Links

- [Getting Started](https://vuexyz.org/getting-started)
- [Interactive Demos](https://vuexyz.org/demo/basic-primitives)
- [Chat on Discord](https://discord.gg/hKyfDAddsK)

---

## 📄 License

Copyright (c) 2024 Simon Le Marchant _(Marchant Web, LLC.)_

VueXYZ is licensed under the [MIT License](https://github.com/vuexyz/vuexyz/blob/main/LICENSE). Licensed works, modifications, and larger works may be distributed under different terms and without source code.

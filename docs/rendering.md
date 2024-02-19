# Rendering

Most frontend creative coding libraries _(like p5.js or pixi.js)_ handle rendering for you. Typically, they provide a `draw` function that gets called every frame and any code you write gets drawn to a canvas element.

VueXYZ is different in that regard. It doesn't provide a `draw` function or generate any canvas. Instead, it's a collection of composables that return data about a scene, described as geometric primitives for the most part. It's up to you to decide how to render that data.

That said, sometimes it's useful to visualize the data in a way that's not just a bunch of numbers. For that, VueXYZ primitives return a handful of methods to support this.

## svgPath

All 2D primitives within VueXYZ return an `svgPath` member. This string represents an SVG path. For example:

```js
{ svgPath } = useHexagon({size: 100})
```

`svgPath` is a reactive value. This means that if the size of the hexagon changes, the string will update accordingly. To use it, all you have to do is bind it to an SVG path element:

```html
<template>
  <svg>
    <path :d="svgPath" />
  </svg>
</template>
```

# Rendering

Most frontend creative coding libraries _(like p5.js or pixi.js)_ handle rendering for you. Typically, they provide a `draw` function that gets called every frame and any code you write gets drawn to a canvas element.

VueXYZ is different in that regard, as it doesn't draw anything or modify the DOM in any way. Instead, each composable returns' data. It's up to you to decide how to render that it.

But even with this approach, sometimes it's useful to visualize primitives. For that purpose, all primitives return reactive properties to make it painless to render them to SVG, canvas, and even in 3D.

## `svgPath`

All primitives within VueXYZ return an `svgPath` member. This string represents an SVG path. For example:

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

## `drawOnCanvas`

If you want to draw to a HTML5 canvas element instead, you can use the `drawOnCanvas` method. This method takes a canvas context and draws the primitive to it.

```js
{ drawOnCanvas } = useHexagon({size: 100})
```

You can then call it when setting up your canvas:

```js
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Customize however you want
ctx.strokeStyle = '#FF0000'; // Red line
ctx.lineWidth = 2;

// Draw the primitive
drawOnCanvas(ctx);

// Add a stroke or fill operation as desired
ctx.stroke(); // or ctx.fill();
```

> [!IMPORTANT]
> It's important to note that VueXYZ doesn't handle the canvas lifecycle for you. In the example above, it will render the primitive once and stop. If you want it to animate, you'll need to call `drawOnCanvas(ctx)` on every frame within your draw loop, as shown in the [Canvas Rendering demo](/demo/canvas-rendering).

## `threeShape` and `threeCurvePath`

Thanks to [JaimeTorrealba](https://github.com/JaimeTorrealba), VueXYZ primitives now return two properties that can be used with the [three.js](https://threejs.org/) and [tres.js](https://tresjs.org/) libraries.

`threeShape` returns a [THREE.Shape](https://threejs.org/docs/#api/en/extras/core/Shape) object representing the primitive's 2D face. This is only applicable with closed shapes such as squares, circles, etc. but not open-faced shapes like lines or arcs. See the [3D / Tres Demo](/demo/three-demo) for an example of using `threeShape` to create extruded geometry w/ Tres.

`threeCurvePath` returns a [THREE.CurvePath](https://threejs.org/docs/#api/en/extras/core/CurvePath) object representing the primitive's 2D edges. This can be used to draw lines in 3D space representing the primitive's edges, and to get lower-level data about points along the edges.

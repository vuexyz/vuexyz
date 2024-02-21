# Rendering

Most frontend creative coding libraries _(like p5.js or pixi.js)_ handle rendering for you. Typically, they provide a `draw` function that gets called every frame and any code you write gets drawn to a canvas element.

VueXYZ is different in that regard, as it doesn't draw anything or modify the DOM in any way. Instead, each composable returns data. It's up to you to decide how to render that it.

But even with this approach, sometimes it's useful to visualize primitives. For that purpose, all primitives return reactive properties to make it painless to render them to SVG or canvas.

## svgPath

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

## drawOnCanvas

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

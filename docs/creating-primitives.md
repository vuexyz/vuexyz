# Creating Primitives

Primitives in VueXYZ provide a powerful way to create interesting layouts and creative effects in the browser. There are a few different ways to create primitives and use their data, so this guide will walk you through the basics of working with them.

## The Basics

Primitives are accessible as standalone composables that can be imported into your code. For example:

```js
const hexagon = useHexagon();
```

This will create a new hexagon primitive. You can pass in a configuration object to customize the primitive:

```js
const hexagon = useHexagon({
  size: 100,
});
```

This will create a hexagon with a maximum size of 100. The unit doesn't matter here, as it's not rendering anything, but typically I think of the units as pixels.

## Regular Polygons

Regular polygons are the simplest type of primitive, where every side is the same length. For example, a hexagon has 6 sides, and they are all the same length.

You can configure a polygon using `size` as shown above _(which fits it within an imaginary circle of the same diameter)_, or you can define the length of each side using `sideLength`:

```js
const hexagon = useHexagon({
  sideLength: 100,
});
```

There are a handful of pre-made regular polygon composables available for you, such as `usePentagon`, `useTriangle`, `useOctagon`, etc. That said, you can generate a regular with any number of sides yourself, by calling `usePolygon` and passing in the number of sides you want:

```js
// create our own 9-sided regular polygon (a nonagon)
const nonagon = usePolygon({
    sides: 9,
    size: 100
});
```

## Irregular Polygons

Irregular polygons are a bit more complex, as they have sides of different lengths. Instead of defining side lengths or size, you can directly pass an array of vertices to `usePolygon`:

```js
const rightAngledTriangle = usePolygon({
    vertices: [
        { x: 100, y: 0 }, // these could also be ref() objects
        { x: 100, y: 100 },
        { x: 0, y: 0 },
    ],
});
```

> [!TIP]
> Keep in mind that additional configuration properties such as `rotation` and `scale` all use `{x: 0, y: 0}` as the origin point. This means that you may want to adjust the vertices to be centered around the origin point if you plan to use these built-in transformations.

## Common Configuration

All primitives share a common set of configuration properties, such as `position`, `rotation` and `scale`:

```js
const hexagon = useHexagon({
    side: 100, 
    position: { x: 100, y: 100 }, 
    rotation: 45, 
    scale: 2,
})
```

These configuration properties can also be reactive, so you can animate them:

```js
// Let's set up some reactive properties
const size = ref(100)
const position = ref({ x: 100, y: 100 })
const rotation = ref(0)
const scale = computed(() => 2) // can also be computed, or a getter function

// This hexagon will be updated if any of the reactive props change
const hexagon = useHexagon({
    size, 
    position, 
    rotation, 
    scale
})
```

# Using Primitive Data

## Destructuring

Now that we're created a primitive, we can access reactive data about the generated shape and use it in many different ways. Previously, we defined a hexagon:

```js
const hexagon = useHexagon({
  size: 100,
});
```

With this, `hexagon` is an object containing various properties. For most purposes, it's better to destructure the properties you need:

```js
const { vertices, edges, faces } = useHexagon({
  size: 100,
});
```

Now we can access `vertices`, `edges` and `faces` separately. If you are using multiple primitives, you may want to rename the destructured properties to avoid conflicts:

```js
const { vertices: hexagonVertices } = useHexagon({
  size: 100,
});

const { vertices: squareVertices } = useSquare({
    size: 200,
});
```

This gives us both `hexagonVertices` and `squareVertices` to work with.

## Vertices

`ComputedRef<Vertex[]>`

Most of the time when you're working with VueXYZ, it'll come down to vertex data. `vertices` is a reactive array of all points of the primitive shape. For example, a triangle has three (3) vertices.

A TypeScript type is available for `Vertex` and defined as follows:

```ts
/**
 * A single point in 2D or 3D space.
 */
export interface Vertex {
    x: number
    y: number
    z?: number
}
```

> [!NOTE]
> At the time of writing this, `z` is largely ignored, but has been added for future compatibility if 3D primitives get added to the library.

It's important to be aware that while `vertices` is a reactive array _(computed)_, the individual `Vertex` objects are not reactive. If you want to pass a reactive vertex to another composable, you'll want to wrap it within a computed property:

```js
const { vertices } = useTriangle({
    size: 100,
})

// This will give us a single reactive vertex from the triangle
const firstVertex = computed(() => vertices.value[0])

// You can also inline it be to more concise
const circle = useCircle({
    radius: 100,
    position: computed(() => vertices.value[0]),
})
```

This gives us a circle that is always centered on the first vertex of the triangle, and it's 100% reactive. If the triangle changes, the circle will update accordingly.

## Edges

`ComputedRef<Edge[]>`

Edges are the lines that connect the vertices together. They are also reactive, and are useful for drawing the shape to a canvas or SVG. The TypeScript type for `Edge` is a little more complex, as it can consist of multiple line and/or curve segments.

```ts
/**
 * A line segment connecting two points in 2D or 3D space (vertices).
 */
export interface LineSegment {
    type: 'line';
    start: Vertex;
    end: Vertex;
}

/**
 * A curve segment connecting two points in 2D or 3D space (vertices).
 */
export interface CurveSegment {
    type: 'curve';
    start: Vertex;
    c1: Vertex;
    c2: Vertex;
    end: Vertex;
}

/**
 * A single segment of an edge, either a line segment or a curve segment.
 */
export type EdgeSegment = LineSegment | CurveSegment;

/**
 * An edge connecting two points in 2D or 3D space, comprised of one or more line and/or curve segments.
 */
export type Edge = EdgeSegment[];
```

> [!IMPORTANT]
> Don't worry, most of the time you won't need to worry about the complexity of `Edge`. There are many utility methods built-in to VueXYZ that accept an `Edge` object and return the data you'll actually need.

## Faces

`ComputedRef<Face[]>`

Faces are the filled areas of a shape. For all closed polygon composables, there will only be one face. For open shapes, such as a line, arc or bézier curve, there will be no faces. In TypeScript, a `Face` is just an array of edges that form a closed polygon:

```ts
/**
 * Multiple edges combine to form a face.
 */
export type Face = Edge[];
```

Again, like Edges, you're unlikely to use this information directly - it will more than likely be passed to a utility composable to get what you actually need.

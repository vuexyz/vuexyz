---
category: '@Utilities'
---

# usePointOnPrimitive

Takes an input primitive and returns a vertex at a given percentage along the perimeter, across all edges.

## Configuration

| Property   | Default | Description                                                         |
|:-----------|:--------|:--------------------------------------------------------------------|
| primitive  |         | A primitive, such as the result of `useCircle`, `useTriangle`, etc. |
| percentage | `0`     | A value between 0 and 1.                                            |

## Usage

```js
const square = useSquare({sideLength: 100})
const { point } = usePointOnPrimitive(square, 0.4)
// point.value = { x: -10, y: 50, z: 0 }
```

## Returns

`usePointOnPrimitive` returns a single `{point: ComputedRef<Vertex>}` in the format `{x: number, y: number, z: number}`.

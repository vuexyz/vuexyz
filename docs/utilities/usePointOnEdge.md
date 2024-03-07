---
category: '@Utilities'
---

# usePointOnEdge

Takes an input edge from a primitive and returns a vertex at a given percentage of the edge.

## Configuration

| Property   | Default | Description                      |
|:-----------|:--------|:---------------------------------|
| edge       |         | A single `Edge` from a primitive. |
| percentage | `0`     | A value between 0 and 1.         |

## Usage

A circle only has one edge, so we can get a point 25% of the way around a circle like so. Keep in mind that a circle starts at the right-hand position and moves clockwise, so 25% of the way around is the bottom-most point.

```js
const circle = useCircle({radius: 50})
const { point } = usePointOnEdge(circle.edges.value[0], 0.25)
// point.value = { x: 0, y: 50, z: 0 }
```

## Returns

`usePointOnEdge` returns a single `{point: ComputedRef<Vertex>}` in the format `{x: number, y: number, z: number}`.

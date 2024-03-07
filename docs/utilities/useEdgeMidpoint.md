---
category: '@Utilities'
---

# useEdgeMidpoint

Takes an input edge from a primitive and returns a vertex at a the midpoint. This essentially functions as an alias for `usePointOnEdge` with a percentage of `0.5`.

## Configuration

| Property   | Default | Description                      |
|:-----------|:--------|:---------------------------------|
| edge       |         | A single `Edge` from a primitive. |

## Usage

```js
const circle = useCircle({radius: 50})
const { midpoint } = useEdgeMidpoint(circle.edges.value[0], 0.5)
// midpoint.value = { x: -50, y: 0, z: 0 }
```

## Returns

`useEdgeMidpoint` returns a single `{midpoint: ComputedRef<Vertex>}` in the format `{x: number, y: number, z: number}`.

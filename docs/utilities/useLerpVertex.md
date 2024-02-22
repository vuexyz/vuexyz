---
category: '@Utilities'
---

# useLerpVertex

Takes two input vertices and interpolates between them a given percentage. You can see a full example of this in the [Interpolate Vertex](/demo/lerp-vertex) demo.

## Configuration

| Property   | Default               | Description                            |
|:-----------|:----------------------|:---------------------------------------|
| start      | `{x: 0, y: 0, z: 0 }` | The vertex at a given percentage of 0. |
| end        | `{x: 0, y: 0, z: 0 }` | The vertex at a given percentage of 1. |
| percentage | `0`                   | A value between 0 and 1.               |

## Usage

```js
    const start = ref({x: 100, y: 100, z: 0})
    const end = ref({x: 300, y: 300, z: 100})
    const midpoint = useLerpVertex(start, end, 0.5)
    // midpoint = {x: 200, y: 200, z: 25}
```

## Returns

`useLerpVertex` returns a single `ComputedRef<Vertex>` in the format `{x: number, y: number, z: number}`.

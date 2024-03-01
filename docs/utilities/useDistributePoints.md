---
category: '@Utilities'
---

# useDistributePoints

Takes a primitive and a number of vertices, returning an array of vertices that are evenly distributed along the
primitive's edges.

## Configuration

| Property  | Default                               | Description                                                                                                                                                     |
|:----------|:--------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| primitive |                                       | A primitive, such as the result of `useCircle`, `useTriangle`, etc.                                                                                             |
| count     | `0`                                   | How many points along the edge of the primitive do you want to return?                                                                                          |
| options   | `{method: 'around', align: 'center'}` | An object with a spacing `method` (either `between` or `around`) and a justification method (either `start`, `center` or `end` for `around` justification only) |

## Usage

```js
const square = useSquare({sideLength: 100})
const { vertices, percentages } = useDistributePoints(square, 6)
// vertices = [{x, y, z}, {x, y, z} ...]
// percentages = [0, 0.2, 0.4, 0.6, 0.8, 1]
```

## Returns

`usePointOnPrimitive` returns a `ComputedRef<Vertex[]>` for the `vertices` generated, and an array of `percentages` corresponding to each vertex.

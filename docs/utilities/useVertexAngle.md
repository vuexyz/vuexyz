---
category: '@Utilities'
---

# useVertexAngle

Takes a start and end vertex, and returns both the angle and distance between them.

## Configuration

| Property | Default               | Description                                        |
|:---------|:----------------------|:---------------------------------------------------|
| start    | `{x: 0, y: 0, z?: 0}` | A `Vertex` representing the starting point.        |
| end      | `{x: 0, y: 0, z?: 0}` | A `Vertex` to find the angle and distance towards. |

## Usage

```js
const start = ref({x: 0, y: 0})
const end = ref({x: 100, y: 100})
const {angle, distance} = useVertexAngle(start, end)
```

## Returns

| Property   | Type Declaration      | Description                                              |
|:-----------|:----------------------|:---------------------------------------------------------|
| `angle`    | `ComputedRef<number>` | The angle, in degrees, from the start to the end vertex. |
| `distance` | `ComputedRef<number>` | The distance between the two vertices.                   |

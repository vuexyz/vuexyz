---
category: '@Utilities'
---

# useEdgeLength

Takes an edge and returns the total length of the edge. As edges are comprised of one or more line and/or curve
segments, it also returns the length of each segment in the edge as a separate array. Typically, you're only going to
need the `length` property.

## Configuration

| Property | Default | Description                       |
|:---------|:--------|:----------------------------------|
| edge     |         | A single `Edge` from a primitive. |

## Usage

```js
const square = useSquare({sideLength: 100})
const {length, segmentLengths} = useEdgeLength(square.edges.value[0])
```

## Returns

| Property         | Type Declaration        | Description                                                                                |
|:-----------------|:------------------------|:-------------------------------------------------------------------------------------------|
| `length`         | `ComputedRef<number>`   | The length of the whole edge of a primitive (most commonly used)                           |
| `segmentLengths` | `ComputedRef<number[]>` | The length of each segment in the edge, if an edge has multiple line and/or curve segments |

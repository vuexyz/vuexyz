## Returns

All primitive shapes return the following reactive members:

| Property   | Type Declaration        | Description                                          |
|:-----------|:------------------------|:-----------------------------------------------------|
| `vertices` | `ComputedRef<Vertex[]>` | An array of all vertices.                            |
| `edges`    | `ComputedRef<Edge[]>`   | An array of all edges.                               |
| `faces`    | `ComputedRef<Face[]>`   | An array of all faces.                               |
| `centroid` | `ComputedRef<Vertex[]>` | The centroid _(geometric center)_ of all vertices.   |
| `svgPath`  | `ComputedRef<string>`   | An SVG path representing the shape of the primitive. |

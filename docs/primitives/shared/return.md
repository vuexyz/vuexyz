## Returns

All primitive shapes return the following reactive members:

| Property         | Type Declaration                          | Description                                                                                                                                                  |
|:-----------------|:------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `vertices`       | `ComputedRef<Vertex[]>`                   | An array of all vertices.                                                                                                                                    |
| `edges`          | `ComputedRef<Edge[]>`                     | An array of all edges.                                                                                                                                       |
| `faces`          | `ComputedRef<Face[]>`                     | An array of all faces.                                                                                                                                       |
| `centroid`       | `ComputedRef<Vertex[]>`                   | The centroid _(geometric center)_ of all vertices.                                                                                                           |
| `boundingBox`    | `ComputedRef<BoundingBox>`                | The bounding box of the primitive, with properties `x`, `y`, `width`, `height`, `maxX` and `maxY`                                                            |
| `svgPath`        | `ComputedRef<string>`                     | An SVG path representing the shape of the primitive.                                                                                                         |
| `drawToCanvas`   | `(ctx: CanvasRenderingContext2D) => void` | A method that draws the primitive to a canvas context.                                                                                                       |
| `threeShape`     | `ComputedRef<THREE.Shape>`                | A [THREE.Shape](https://threejs.org/docs/#api/en/extras/core/Shape) object representing the primitive's 2D face. _Only applicable with closed shapes._    |
| `threeCurvePath` | `ComputedRef<THREE.CurvePath>`            | A [THREE.CurvePath](https://threejs.org/docs/#api/en/extras/core/CurvePath) object representing the primitive's 2D edges. Can be used in `three` and `tres`. |

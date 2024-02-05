---
category: '@Primitives'
---

# usePolygon

Composable for working with polygons.

## Configuration

The `usePolygon` function accepts a single configuration object as an argument, where each property has a default value if not provided.

| Property     | Default          | Description                                  |
|:-------------|:-----------------|:---------------------------------------------|
| `sides`      | `0`              | The number of sides of the polygon.          |
| `sideLength` | `0`              | The length of each side of the polygon.      |
| `rotation`   | `0`              | The rotation of the polygon in degrees.      |
| `center`     | `{ x: 0, y: 0 }` | A 2D Vector for the center of the polygon.   |

## Usage

```ts
import { usePolygon } from 'vuexyz'

const sides: Ref<number> = ref(5)
const sideLength: Ref<number> = ref(50)
const center: Ref<{x: number, y: number}> = ref({ x: 0, y: 0 })
const { vertices, edges, getPosition } = usePolygon({ sides, sideLength, center })
```

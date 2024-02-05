---
category: '@Primitives'
---

# useRectangle

Composable for working with rectangles.

## Configuration

The `useRectangle` function accepts a single configuration object as an argument, where each property has a default value if not provided.

| Property   | Default          | Description                               |
|:-----------|:-----------------|:------------------------------------------|
| `width`    | `0`              | The width of the rectangle.               |
| `height`   | `0`              | The height of the rectangle.              |
| `rotation` | `0`              | The rotation of the rectangle in degrees. |
| `center`   | `{ x: 0, y: 0 }` | A 2D Vector for center of the rectangle.  |

## Usage

```ts
import { useRectangle } from 'vuexyz'

const width: Ref<number> = ref(50)
const height: Ref<number> = ref(100)
const center: Ref<{x: number, y: number}> = ref({ x: 0, y: 0 })
const { vertices, edges, getPosition } = useRectangle({ width, height, center })
```

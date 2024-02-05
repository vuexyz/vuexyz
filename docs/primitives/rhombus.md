---
category: '@Primitives'
---

# useRhombus

Composable for working with a rhombus.

## Configuration

The `useRhombus` function accepts a single configuration object as an argument, where each property has a default value if not provided.

| Property   | Default          | Description                             |
|:-----------|:-----------------|:----------------------------------------|
| `d1`       | `0`              | The first diagonal of the rhombus.      |
| `d2`       | `0`              | The second diagonal of the rhombus.     |
| `rotation` | `0`              | The rotation of the rhombus in degrees. |
| `center`   | `{ x: 0, y: 0 }` | A 2D Vector for center of the rhombus.  |

## Usage

```ts
import { useRhombus } from 'vuexyz'

const d1: Ref<number> = ref(50)
const d2: Ref<number> = ref(100)
const center: Ref<{x: number, y: number}> = ref({ x: 0, y: 0 })
const { vertices, edges, getPosition } = useRhombus({ d1, d2, center })
```

---
category: '@Primitives'
---

# useCircle

Composable for working with circles.

## Configuration

The `useCircle` function accepts a single configuration object as an argument, where each property has a default value if not provided.

| Property | Default          | Description                           |
|:---------|:-----------------|:--------------------------------------|
| `radius` | `0`              | The radius of the circle.             |
| `center` | `{ x: 0, y: 0 }` | A 2D Vector for center of the circle. |

## Usage

```ts
import { useCircle } from 'vuexyz'

const radius: Ref<number> = ref(50)
const { getPosition } = useCircle({ radius })
```

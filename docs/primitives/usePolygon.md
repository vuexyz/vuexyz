---
category: '@Primitives'
---

<script setup>
    import UsePolygonDemo from '../demo/components/usePolygonDemo.vue';
</script>

# usePolygon

Composable for working with polygons.

<UsePolygonDemo />

## Configuration

The `usePolygon` function accepts a single configuration object as an argument, where each property has a default value if not provided.

| Property     | Default | Description                             |
|:-------------|:--------|:----------------------------------------|
| `sides`      | `4`     | The number of sides.                    |
| `sideLength` | `100`   | The length of each side of the polygon. |

<!--@include: ./shared/config.md-->

## Usage

```ts
import { usePolygon } from 'vuexyz'

const sides = ref(5)
const sideLength = ref(100)
const position = ref({ x: 0, y: 0 })
const { vertices, edges, faces } = usePolygon({ sides, sideLength, position })
```

<!--@include: ./shared/return.md-->

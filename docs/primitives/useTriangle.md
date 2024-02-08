---
category: '@Primitives'
---

<script setup>
    import UseTriangleDemo from '../demo/components/useTriangleDemo.vue';
</script>

# useTriangle

Composable for working with triangles.

<UseTriangleDemo />

## Configuration

The `useTriangle` function accepts a single configuration object as an argument, where each property has a default value if not provided.

| Property   | Default          | Description                              |
|:-----------|:-----------------|:-----------------------------------------|
| `base`     | `0`              | The base of the triangle.                |
| `height`   | `0`              | The height of the triangle.              |

<!--@include: ./shared/config.md-->

## Usage

```ts
import { useTriangle } from 'vuexyz'

const base = ref(50)
const height = ref(100)
const position = ref({ x: 0, y: 0 })
const { vertices, edges, faces } = useTriangle({ base, height, position })
```

<!--@include: ./shared/return.md-->

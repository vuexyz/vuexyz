---
category: '@Primitives'
---

<script setup>
    import UseLineDemo from '../demo/components/useLineDemo.vue';
</script>

# useLine

Composable for working with lines comprised of two or more vertices.

<UseLineDemo />

## Configuration

The `useLine` function accepts a single configuration object as an argument, where each property has a default value if not provided.

| Property   | Default | Description                       |
|:-----------|:--------|:----------------------------------|
| `vertices` | `[]`    | An array of two or more vertices. |

<!--@include: ./shared/config.md-->

## Usage

```ts
import { useLine } from 'vuexyz'

const start: Ref<Vertex> = ref({ x: -100, y: -100 })
const end: Ref<Vertex> = ref({ x: 100, y: 100 })
const { vertices, edges, faces } = useLine({ vertices: [start, end]})
```

<!--@include: ./shared/return.md-->

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

> [!NOTE]
> `useTriangle` provides a regular triangle calling `usePolygon({sides: 3})`. If you want to define a more complex triangle, try `usePolygon({vertices})` to pass vertices directly.

| Property   | Default          | Description                              |
|:-----------|:-----------------|:-----------------------------------------|
<!--@include: ./shared/polygonprops.md-->

<!--@include: ./shared/config.md-->

## Usage

```ts
import { useTriangle } from 'vuexyz'

const size = ref(200)
const position = ref({ x: 0, y: 0 })
const { vertices, edges, faces } = useTriangle({ size, position })
```

<!--@include: ./shared/return.md-->

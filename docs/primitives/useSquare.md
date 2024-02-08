---
category: '@Primitives'
---

<script setup>
    import UseSquareDemo from '../demo/components/useSquareDemo.vue';
</script>

# useSquare

Composable for working with squares.

<UseSquareDemo />

## Configuration

> [!TIP]
> `useSquare` is an alias for `usePolygon({sides: 4})`. It accepts all the props that `usePolygon` supports, except `sides`.

| Property   | Default          | Description                              |
|:-----------|:-----------------|:-----------------------------------------|
<!--@include: ./shared/polygonprops.md-->

<!--@include: ./shared/config.md-->

## Usage

```ts
import { useSquare } from 'vuexyz'

const sideLength = ref(50)
const position = ref({ x: 0, y: 0 })
const { vertices, edges, faces } = useSquare({ sideLength, height, position })
```

<!--@include: ./shared/return.md-->

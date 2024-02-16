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

| Property   | Default          | Description                              |
|:-----------|:-----------------|:-----------------------------------------|
<!--@include: ./shared/polygonprops.md-->

<!--@include: ./shared/config.md-->

## Usage

```ts
import { useSquare } from 'vuexyz'

const sideLength = ref(50)
const position = ref({ x: 0, y: 0 })
const { vertices, edges, faces } = useSquare({ sideLength, position })
```

<!--@include: ./shared/return.md-->

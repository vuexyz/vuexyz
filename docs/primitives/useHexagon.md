---
category: '@Primitives'
---

<script setup>
    import UseHexagonDemo from '../demo/components/useHexagonDemo.vue';
</script>

# useHexagon

Composable for working with hexagons.

<UseHexagonDemo />

## Configuration

| Property   | Default          | Description                              |
|:-----------|:-----------------|:-----------------------------------------|
<!--@include: ./shared/polygonprops.md-->

<!--@include: ./shared/config.md-->

## Usage

```ts
import { useHexagon } from 'vuexyz'

const sideLength = ref(50)
const position = ref({ x: 0, y: 0 })
const { vertices, edges, faces } = useHexagon({ sideLength, position })
```

<!--@include: ./shared/return.md-->

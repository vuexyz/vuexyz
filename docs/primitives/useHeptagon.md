---
category: '@Primitives'
---

<script setup>
    import UseHeptagonDemo from '../demo/components/useHeptagonDemo.vue';
</script>

# useHeptagon

Composable for working with heptagons _(7-sided polygon)_.

<UseHeptagonDemo />

## Configuration

| Property   | Default          | Description                              |
|:-----------|:-----------------|:-----------------------------------------|
<!--@include: ./shared/polygonprops.md-->

<!--@include: ./shared/config.md-->

## Usage

```ts
import { useHeptagon } from 'vuexyz'

const sideLength = ref(50)
const position = ref({ x: 0, y: 0 })
const { vertices, edges, faces } = useHeptagon({ sideLength, position })
```

<!--@include: ./shared/return.md-->

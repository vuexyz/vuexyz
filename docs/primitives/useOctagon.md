---
category: '@Primitives'
---

<script setup>
    import UseOctagonDemo from '../demo/components/useOctagonDemo.vue';
</script>

# useOctagon

Composable for working with octagons _(8-sided polygon)_.

<UseOctagonDemo />

## Configuration

| Property   | Default          | Description                              |
|:-----------|:-----------------|:-----------------------------------------|
<!--@include: ./shared/polygonprops.md-->

<!--@include: ./shared/config.md-->

## Usage

```ts
import { useOctagon } from 'vuexyz'

const sideLength = ref(50)
const position = ref({ x: 0, y: 0 })
const { vertices, edges, faces } = useOctagon({ sideLength, position })
```

<!--@include: ./shared/return.md-->

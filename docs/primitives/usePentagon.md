---
category: '@Primitives'
---

<script setup>
    import UsePentagonDemo from '../demo/components/usePentagonDemo.vue';
</script>

# usePentagon

Composable for working with pentagons _(5-sided polygon)_.

<UsePentagonDemo />

## Configuration

| Property   | Default          | Description                              |
|:-----------|:-----------------|:-----------------------------------------|
<!--@include: ./shared/polygonprops.md-->

<!--@include: ./shared/config.md-->

## Usage

```ts
import { usePentagon } from 'vuexyz'

const sideLength = ref(50)
const position = ref({ x: 0, y: 0 })
const { vertices, edges, faces } = usePentagon({ sideLength, position })
```

<!--@include: ./shared/return.md-->

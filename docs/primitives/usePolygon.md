---
category: '@Primitives'
---

<script setup>
    import UsePolygonDemo from '../demo/components/usePolygonDemo.vue';
</script>

# usePolygon

Composable for working with regular and irregular polygons. It is also aliased with preset parameters for all other
regular polygon composables such as `useSquare`, `usePentagon`, `useHexagon`, etc.

<UsePolygonDemo />

## Configuration

The `usePolygon` function accepts a single configuration object as an argument. There are two types of polygon configurations:

#### 1. Regular polygon

| Property | Default | Description          |
|:---------|:--------|:---------------------|
| `sides`  | `4`     | The number of sides. |
<!--@include: ./shared/polygonprops.md-->

#### 2. Irregular polygon

| Property   | Default | Description                                  |
|:-----------|:--------|:---------------------------------------------|
| `vertices` | `[]`    | An array of vertices to draw the shape with. |

<!--@include: ./shared/config.md-->

## Usage

```ts
import {usePolygon} from 'vuexyz'

const sides = ref(5)
const sideLength = ref(100)
const position = ref({x: 0, y: 0})
const {vertices, edges, faces} = usePolygon({sides, sideLength, position})
```

<!--@include: ./shared/return.md-->

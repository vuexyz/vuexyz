<script setup lang="ts">
import {usePolygon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";


// Create a polygon using the usePolygon() composable
const primitive = usePolygon({sides: 7, sideLength: 100, position: {x: 688 / 2, y: 400 / 2}})
const primitive2 = usePolygon({
  vertices: [
    {x: -150, y: 20},
    {x: 0, y: -100},
    {x: 150, y: 20},
    {x: 75, y: 100},
    {x: -75, y: 100}
  ], position: {x: 688 / 2, y: 400 / 2}
})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="usePolygon({sides: 7, sideLength: 100}) -> Regular Polygon"/>
  <PrimitiveSVGRenderer :primitives="[primitive2]" label="usePolygon({vertices: [...]}) -> Irregular Polygon"/>
</template>

<script setup lang="ts">
import {usePolygon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";

// Create a polygon using the usePolygon() composable
const primitive = usePolygon({sides: 5, sideLength: 100, position: {x: 688 / 2, y: 400 / 2}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" />
</template>

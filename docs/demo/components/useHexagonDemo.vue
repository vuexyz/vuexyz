<script setup lang="ts">
import {useHexagon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";

// Create a hexagon using the useHexagon() composable
const primitive = useHexagon({sideLength: 100, position: {x: 688 / 2, y: 400 / 2}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" />
</template>

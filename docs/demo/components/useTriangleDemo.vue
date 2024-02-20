<script setup lang="ts">
import {useTriangle} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";

// Create a triangle using the useTriangle() composable
const primitive = useTriangle({size: 200, position: {x: 344, y: 200}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useTriangle({base: 240, height: 100})" />
</template>

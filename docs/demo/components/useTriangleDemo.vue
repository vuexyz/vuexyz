<script setup lang="ts">
import {useTriangle} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";

// Create a triangle using the useTriangle() composable
const primitive = useTriangle({base: 240, height: 200, center: {x: 688 / 2, y: 400 / 2}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" />
</template>

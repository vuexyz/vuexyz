<script setup lang="ts">
import {useRectangle} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";

// Create a rectangle using the useRectangle() composable
const primitive = useRectangle({width: 200, height: 100, position: {x: 344, y: 200}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useRectangle({width: 200, height: 100})" />
</template>

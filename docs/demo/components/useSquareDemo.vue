<script setup lang="ts">
import {useSquare} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";


// Create a square using the useSquare() composable
const primitive = useSquare({sideLength: 100, position: {x: 688 / 2, y: 400 / 2}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useSquare({sideLength: 100})" />
</template>

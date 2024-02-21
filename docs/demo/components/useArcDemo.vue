<script setup lang="ts">
import {useArc} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";

// Create an arc using the useArc() composable
const primitive = useArc({radius: 100, startAngle: 0, endAngle: 235, position: {x: 344, y: 200}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useArc({radius: 100, startAngle: 0, endAngle: 235})" />
</template>

<script setup lang="ts">
import {useEllipse} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";


// Create an ellipse using the useEllipse() composable
const primitive = useEllipse({xRadius: 100, yRadius: 50, position: {x: 688 / 2, y: 400 / 2}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useEllipse({xRadius: 100, yRadius: 50})" />
</template>

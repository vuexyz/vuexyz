<script setup lang="ts">
import {useCircle} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";


// Create a circle using the useCircle() composable
const primitive = useCircle({radius: 100, position: {x: 688 / 2, y: 400 / 2}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useCircle({radius: 100})"/>
</template>

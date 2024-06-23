<script setup lang="ts">
import {useHexagon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";
import PrimitiveTresRenderer from "./renderer/PrimitiveTresRenderer.vue";

// Create a hexagon using the useHexagon() composable
const primitive = useHexagon({size: 200, position: {x: 688 / 2, y: 400 / 2}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useHexagon({size: 200})" />
  <PrimitiveTresRenderer :primitives="[primitive]" label="useCircle({radius: 100})"/>
</template>

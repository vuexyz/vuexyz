<script setup lang="ts">
import {useOctagon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";
import PrimitiveTresRenderer from "./renderer/PrimitiveTresRenderer.vue";

// Create an octagon using the useOctagon() composable
const primitive = useOctagon({size: 200, position: {x: 344, y: 200}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useOctagon({size: 200})" />
  <PrimitiveTresRenderer :primitives="[primitive]" label="useCircle({radius: 100})"/>
</template>

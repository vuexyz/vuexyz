<script setup lang="ts">
import {useHeptagon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";
import PrimitiveTresRenderer from "./renderer/PrimitiveTresRenderer.vue";

// Create a heptagon using the useHeptagon() composable
const primitive = useHeptagon({size: 200, position: {x: 344, y: 200}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useHeptagon({size: 200})" />
  <PrimitiveTresRenderer :primitives="[primitive]" label="useCircle({radius: 100})"/>
</template>

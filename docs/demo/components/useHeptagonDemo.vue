<script setup lang="ts">
import {useHeptagon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";

// Create a heptagon using the useHeptagon() composable
const primitive = useHeptagon({size: 200, position: {x: 344, y: 200}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useHeptagon({size: 200})" />
</template>

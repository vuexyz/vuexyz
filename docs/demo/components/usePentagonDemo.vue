<script setup lang="ts">
import {usePentagon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";


// Create a pentagon using the usePentagon() composable
const primitive = usePentagon({size: 200, position: {x: 688 / 2, y: 400 / 2}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="usePentagon({size: 200})" />
</template>

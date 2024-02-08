<script setup lang="ts">
import {withDefaults} from 'vue'
import {Primitive} from "../../../../src/primitives/usePrimitive";

interface Props {
  primitives: Primitive[]
}

const props = withDefaults(defineProps<Props>(), {
  primitives: (): Primitive[] => [],
})

</script>

<template>
  <div class="demo-container">
    <svg width="100%" viewBox="0 0 688 400">

      <!-- Render each primitive's SVG path -->
      <path v-for="primitive in primitives" :d="primitive.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)" stroke-width="4"/>

    </svg>
  </div>
</template>

<style scoped>

</style>

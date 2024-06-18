<script setup lang="ts">
import {useOctagon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";
import {Primitive} from "../../../src/primitives/usePrimitive";
import {onMounted, onUnmounted, ref, Ref} from "vue";
import {useDistributePoints} from "../../../src/utilities/useDistributePoints";

// Create an octagon primitive
const rotation: Ref<number> = ref(0)
const octagon: Primitive = useOctagon({position: {x: 344, y: 200}, size: 200, rotation})

// Let's get an array of 16 points (vertex objects) equally distributed around the edge of the octagon
const {vertices} = useDistributePoints(octagon, 16)

let RAF = null;

onMounted(() => {
  // Constantly rotate the octagon
  const rotationInterval = () => {
    rotation.value += 0.5
    RAF = requestAnimationFrame(rotationInterval)
  }
  rotationInterval()
});

onUnmounted(() => {
  cancelAnimationFrame(RAF)
})

</script>

<template>
  <!-- This renderer is just for demo purposes -->
  <!-- All it does is take each primitive's svgPath property and render it in an SVG context -->
  <PrimitiveSVGRenderer :primitives="[octagon]" :vertices="vertices"
                        label="16 points equally spaced around an octagon"/>
</template>

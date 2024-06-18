<script setup lang="ts">
import {usePentagon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";
import {Primitive} from "../../../src/primitives/usePrimitive";
import {onMounted, onUnmounted, ref, Ref} from "vue";
import {usePointOnPrimitive} from "../../../src/utilities/usePointOnPrimitive";
import {gsap} from "gsap";

// Create a pentagon
const rotation: Ref<number> = ref(0)
const pentagon: Primitive = usePentagon({position: {x: 344, y: 200}, size: 200, rotation})

// Define the percentage around the edge of the pentagon to highlight
const percentage: Ref<number> = ref(0)

// Let's get the point along the edge of the pentagon, at that percentage
const { point } = usePointOnPrimitive(pentagon, percentage)

onMounted(() => {

  // Animate the percentage around the edge of the pentagon to highlight
  const percentageAnimation = gsap.to(percentage, { value: 1, duration: 3, yoyo: true, repeat: -1, ease: "power1.inOut" });

  let RAF = null;

  // Constantly rotate the pentagon
  const rotationInterval = () => {
    rotation.value += 2
    RAF = requestAnimationFrame(rotationInterval)
  }
  rotationInterval()

  // Clean up
  onUnmounted(() => {
    percentageAnimation.kill()
    cancelAnimationFrame(RAF)
  });
});

</script>

<template>
  <!-- This renderer is just for demo purposes -->
  <!-- All it does is take each primitive's svgPath property and render it in an SVG context -->
  <PrimitiveSVGRenderer :primitives="[pentagon]" :vertices="[pentagon.vertices.value[0], point]" label="Highlighting a moving point on the edge of a pentagon"/>
</template>

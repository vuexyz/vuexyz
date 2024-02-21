<script setup lang="ts">
import {useCircle, useTriangle} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";
import {Primitive} from "../../../src/primitives/usePrimitive";
import {computed, ComputedRef, onMounted, onUnmounted, ref, Ref} from "vue";
import {useLerpVertex} from "../../../src";
import { gsap } from "gsap";
import {Vertex} from "../../../src/types";

// Create a triangle
const rotation: Ref<number> = ref(0)
const triangle: Primitive = useTriangle({position: {x: 500, y: 200}, size: 200, rotation})

// Create a static vertex (starting point)
const staticPoint: Vertex = {x: 200, y: 200, z: 0}

// Create a new interpolated point
const percentage: Ref<number> = ref(0)
const interpolatedPoint: ComputedRef<Vertex> = useLerpVertex(staticPoint, computed(() => triangle.vertices.value[0]), percentage)

// Create a small circle
const radius: Ref<number> = ref(30)
const circle: Primitive = useCircle({radius, position: interpolatedPoint})


onMounted(() => {

  // Constantly rotate the triangle
  const rotationInterval = setInterval(() => {
    rotation.value += 2
  }, 1000 / 60)

  // Using GSAP, animate back and forth between the static point and the triangle's first vertex
  const lerpAnimation = gsap.to(percentage, { value: 1, duration: 3, yoyo: true, repeat: -1, ease: "power3.inOut" });

  // Clean up
  onUnmounted(() => {
    lerpAnimation.kill();
    clearInterval(rotationInterval)
  });
});

</script>

<template>
  <!-- This renderer is just for demo purposes -->
  <!-- All it does is take each primitive's svgPath property and render it in an SVG context -->
  <PrimitiveSVGRenderer :primitives="[circle, triangle]" :vertices="[staticPoint, triangle.vertices.value[0]]" label="useLerpVertex"/>
</template>

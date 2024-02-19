<script setup lang="ts">
import {useCircle, usePolygon} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";
import {Primitive} from "../../../src/primitives/usePrimitive";
import {computed, ComputedRef, ref, Ref} from "vue";
import {useLerpVertex} from "../../../src/utilities/useLerpVertex";
import { gsap } from "gsap";
import {Vertex} from "../../../src/primitives/types";

// Create a triangle
const rotation = ref(0)
const triangle: Primitive = usePolygon({sides: 3, position: {x: 500, y: 200}, size: 200, rotation})

// Constantly rotate the triangle
setInterval(() => {
  rotation.value += 1
}, 1000 / 60)

// Create a static vertex (starting point)
const staticPoint: Vertex = {x: 200, y: 200, z: 0}

// Create a new interpolated point between the static point and the triangle's first vertex
const percentage: Ref<number> = ref(0)
const interpolatedPoint: ComputedRef<Vertex> = useLerpVertex(staticPoint, computed(() => triangle.vertices.value[0]), percentage)

// Create a small circle
const radius: Ref<number> = ref(80)
const circle: Primitive = useCircle({radius, position: interpolatedPoint})

// Using GSAP, animate back and forth between the static point and the triangle's first vertex
gsap.to(percentage, {value: 1, duration: 3, yoyo: true, repeat: -1, ease: "power3.inOut"})
gsap.to(radius, {value: 10, duration: 3, yoyo: true, repeat: -1, ease: "power3.inOut"})

</script>

<template>
  <!-- This renderer is just for demo purposes -->
  <!-- All it does is take each primitive's svgPath property and render it in an SVG context -->
  <PrimitiveSVGRenderer :primitives="[circle, triangle]" label="useLerpVertex"/>
</template>

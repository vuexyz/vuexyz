<script setup lang="ts">
import {useCircle, useTriangle} from '../../../src'
import {computed, ref, Ref} from "vue";
import gsap from "gsap";

// Define a ref() for the center of the circle
const center: Ref<{ x: number, y: number }> = ref({x: 60, y: 60})

// Define a rotation amount
const pointRotation = ref(0);
const triangleRotation = computed(() => pointRotation.value  * -360)

// Create a circle using the useCircle() composable
const {svgPath: circleSvgPath} = useCircle({radius: 60, center})

// We're also creating a triangle using the useTriangle() composable
const { svgPath: triangleSvgPath } = useTriangle({base: 40, height: 30, rotation: triangleRotation, center})


// Animate the center of the circle left and right
gsap.to(center.value, {
  x: 628,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
})

// On a different cadence, move the center up and down
gsap.to(center.value, {
  y: 340,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
})

// Rotate the point on the edge of the circle
gsap.to(pointRotation, {
  value: 1,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
})
</script>

<template>
  <div class="demo-container">
    <svg width="100%" viewBox="0 0 688 400">

      <!-- Label -->
      <text :x="center.x" :y="center.y" text-anchor="middle" dominant-baseline="middle" class="demo-label">
        X. {{ Math.round(center.x) }} / Y. {{ Math.round(center.y) }}
      </text>

      <!-- Circle -->
      <path :d="circleSvgPath" fill="none" stroke="rgba(255, 255, 255, 0.4)" stroke-width="3"/>

      <!-- Triangle -->
      <path :d="triangleSvgPath" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="3"/>

      <!-- Point on Circle Edge -->
<!--      <circle :cx="pointOnCircleEdge.x" :cy="pointOnCircleEdge.y" r="6" fill="white"/>-->

      <!-- Point on Triangle Edge -->
<!--      <circle :cx="pointOnTriangleEdge.x" :cy="pointOnTriangleEdge.y" r="6" fill="white"/>-->

    </svg>
  </div>
</template>

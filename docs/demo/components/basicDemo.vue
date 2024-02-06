<script setup lang="ts">
import {useCircle} from '../../../src'
import {ref, Ref} from "vue";
import gsap from "gsap";

// Define a ref() for the center of the circle
const center: Ref<{ x: number, y: number }> = ref({x: 60, y: 60})

// Create a circle using the useCircle() composable
const {getSVGPath, getPosition} = useCircle({radius: 60, center: center.value})

// Get the position of a point on the circle's edge
const pointRotation = ref(0);
const pointOnEdge = getPosition(pointRotation)

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
        X. {{ Math.floor(center.x) }}
      </text>

      <!-- Circle -->
      <path :d="getSVGPath" fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="4"/>

      <!-- Point on Edge -->
      <circle :cx="pointOnEdge.x" :cy="pointOnEdge.y" r="6" fill="white"/>

    </svg>
  </div>
</template>

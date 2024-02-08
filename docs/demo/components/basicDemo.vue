<script setup lang="ts">
import {useCircle, useTriangle} from '../../../src'
import {computed, ref, Ref} from "vue";
import gsap from "gsap";

// Define a ref() for the position of the circle
const position: Ref<{ x: number, y: number }> = ref({x: 60, y: 60})

// Define a rotation amount
const triangleRotation = ref(0)
const triangleScale = ref(1)

// Create a circle using the useCircle() composable
const {svgPath: circleSvgPath} = useCircle({radius: 60, position})

// We're also creating a triangle using the useTriangle() composable
const { svgPath: triangleSvgPath, centroid } = useTriangle({base: 60, height: 70, rotation: triangleRotation, position, scale: triangleScale})


// Animate the position of the circle left and right
gsap.to(position.value, {
  x: 628,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
})

// On a different cadence, move the position up and down
gsap.to(position.value, {
  y: 340,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
})

// Rotate the point on the edge of the circle
gsap.to(triangleRotation, {
  value: -360,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
})

gsap.to(triangleScale, {
  value: 3,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
})
</script>

<template>
  <div class="demo-container">
    <svg width="100%" viewBox="0 0 688 400">

      <!-- Label -->
      <text :x="position.x" :y="position.y" text-anchor="middle" dominant-baseline="middle" class="demo-label">
        X. {{ Math.round(position.x) }} / Y. {{ Math.round(position.y) }}
      </text>

      <!-- Circle -->
      <path :d="circleSvgPath" fill="none" stroke="rgba(255, 255, 255, 0.4)" stroke-width="3"/>

      <!-- Triangle -->
      <path :d="triangleSvgPath" fill="none" stroke="rgba(255, 255, 255, 0.4)" stroke-width="3"/>

      <!-- Centroid of Triangle -->
      <circle :cx="centroid.x" :cy="centroid.y" r="2" fill="white"/>

    </svg>
  </div>
</template>

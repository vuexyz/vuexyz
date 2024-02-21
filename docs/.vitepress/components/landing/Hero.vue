<script setup lang="ts">
import {useCircle} from '../../../../src'
import {computed, onMounted, onUnmounted, ref, Ref} from "vue";
import gsap from "gsap";
import HeroPrimitive from './HeroPrimitive.vue'

// Center of the viewport
const center: Ref<{ x: number, y: number }> = ref({x: 600, y: 300})

// Define animatable params
const numCircles = ref(40);
const circleGap = ref(-10);
const circleGapAmbient = ref(0)
const circleRadius = ref(0);
const glowActive = ref(false);

// Create all of our circles
const circles = computed(() => {
  const circles: useCircle[] = [];
  for (let i = 0; i < numCircles.value; i++) {
    circles.push(useCircle({
      radius: circleRadius.value,
      position: computed(() => ({
        x: center.value.x + (i * (circleGap.value + circleGapAmbient.value)) - ((numCircles.value / 2) * (circleGap.value + circleGapAmbient.value)),
        y: center.value.y
      }))
    }))
  }
  return circles;
});

// Manage an array of primitives that are constantly moving through the "tunnel"
const primitives = ref([]);
let primitiveInterval = null;

// Handle primitives self-destruction
function handlePrimitiveDelete(deletedId) {
  primitives.value = primitives.value.filter(p => p.id !== deletedId);
}

// Start the animation
onMounted(() => {

  // Start timeline
  const timeline = gsap.timeline();
  timeline.to(circleGap, {value: 20, duration: 2, ease: "power3.out"}, 0)
  timeline.to(circleRadius, {value: 110, duration: 3, ease: "power3.inOut"}, 0)
  timeline.set(glowActive, {value: true}, 1)

  // Ambient (non-timeline) motion
  gsap.to(circleGapAmbient, {value: 2, duration: 3, ease: "power1.inOut", repeat: -1, yoyo: true})

  // Create a new primitive
  function createAndPushPrimitive() {
    primitives.value.push({
      id: Math.floor(Math.random() * 1000000000),
      sides: Math.floor(Math.random() * 4) + 3,
    });
  }

  // Create a new primitive every 1.5-4 seconds
  function scheduleNextPrimitive() {
    primitiveInterval = setTimeout(() => {
      if (primitives.value.length < 6) {
        createAndPushPrimitive();
      }
      scheduleNextPrimitive(); // Schedule the next call
    }, Math.random() * 2500 + 1500); // Random delay between 1.5 and 4 seconds
  }

  // Immediately create the first primitive
  setTimeout(() => {
    createAndPushPrimitive();
    scheduleNextPrimitive();
  }, 1000)

})

// Clean up when unmounting
onUnmounted(() => {
  clearTimeout(primitiveInterval)
})

</script>

<template>
  <section style="position: relative">

    <!-- Handwriting 1 -->
    <h2 class="handwriting-1">
      usePolygon( {sides : n })
    </h2>

    <!-- Fig 01. -->
    <h1 class="fig1">FIG. 01</h1>

    <!-- Tunnel of Circles -->
    <svg class="tunnel" width="100%" viewBox="0 0 1200 600">
      <path class="circle" v-for="(circle, index) in circles" :d="circle.svgPath.value" fill="none" stroke="white"
            :style="`animation-delay: ${index * 20}ms`"/>
    </svg>

    <!-- Gradient Glow -->
    <div class="gradient-glow" :class="{'active': glowActive}"/>

    <!-- Primitives -->
    <HeroPrimitive v-for="primitive in primitives" :center="center" :sides="primitive.sides" :id="primitive.id"
                   @delete="handlePrimitiveDelete" :key="primitive.id"/>

    <!-- Handwriting 2 -->
    <h2 class="handwriting-2">
      for ( polygon in primitives ) {<br>&nbsp;&nbsp;&nbsp;&lt; path :d= " polygon.svgPath " &gt;<br>}
    </h2>

  </section>
</template>

<style scoped>

.handwriting-1 {
  position: absolute;
  top: 80px;
  left: 80px;
  transform: rotate(-4deg);
  max-width: 70vw;
  font-size: 20px;
  pointer-events: none;
  display: none;

  @media (min-width: 900px) {
    display: block;
  }

  @media (min-width: 1570px) {
    left: 0;
  }

  @media (min-width: 1570px) {
    left: -100px;
  }
}

.handwriting-2 {
  position: absolute;
  bottom: 0;
  right: 80px;
  transform: rotate(2deg);
  max-width: 70vw;
  display: none;
  pointer-events: none;

  @media (min-width: 900px) {
    display: block;
  }

  @media (min-width: 1380px) {
    right: 0;
  }
}

.fig1 {
  position: absolute;
  top: 130px;
  right: 205px;
  font-size: 14px;
  display: none;
  pointer-events: none;

  @media (min-width: 1050px) {
    display: block;
  }
}

svg {
  overflow: visible;
  pointer-events: none;
  transform: scale(0.9) rotate(90deg);

  @media (min-width: 768px) {
    transform: none;
  }
}

.tunnel {
  position: relative;
}

.gradient-glow {
  width: 1000px;
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #A913FF, #F03AD7, #FF7448, #FFC325, #66FF00, #A913FF, #F03AD7, #FF7448, #FFC325, #66FF00);
  z-index: -1;
  pointer-events: none;
  background-size: 200% 200%;
  animation: gradientAnimation 30s ease infinite;
  opacity: 0;
  top: calc(50% + 100px);
  height: 50px;
  filter: blur(50px);

  @media (min-width: 768px) {
    display: block;
  }

  &.active {
    transition: opacity 3s ease;
    opacity: 1;
  }
}

.circle {
  opacity: 0.3;
  animation: circleMovement 3s infinite;
  transform-origin: 50% 50%;
}

@keyframes circleMovement {
  0%, 80% {
    opacity: 0.2;
    transform: scale(1) translate3d(0, 0, 0);
  }
  20% {
    opacity: 0.7;
    transform: scale(0.98) translate3d(0, 0, 0);
  }
}

@keyframes gradientAnimation {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

</style>

<script setup lang="ts">
import {useCircle} from '../../../../src'
import {computed, onMounted, onUnmounted, ref, Ref} from "vue";
import gsap from "gsap";
import HeroPrimitive from './HeroPrimitive.vue'

// Center of the viewport
const center: Ref<{ x: number, y: number }> = ref({x: 600, y: 300})

// Define animatable params
const numCircles = ref(40);
const circleGap = ref(0);
const circleGapAmbient = ref(0)
const circleRadius = ref(120);

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

  // Ambient (non-timeline) motion
  gsap.to(circleGapAmbient, {value: 2, duration: 3, ease: "power1.inOut", repeat: -1, yoyo: true})

  // Create a new primitive every 3 seconds
  primitiveInterval = setInterval(() => {
    primitives.value.push({
      id: Math.floor(Math.random() * 1000000000),
      sides: Math.floor(Math.random() * 4) + 3,
    })
  }, 3000)
})

// Clean up when unmounting
onUnmounted(() => {
  clearInterval(primitiveInterval)
})

</script>

<template>
  <section>

    <!-- Tunnel of Circles -->
    <svg class="tunnel" width="100%" viewBox="0 0 1200 600">
      <path v-for="circle in circles" :d="circle.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 0.3)"
            stroke-width="1"/>
    </svg>

    <!-- Gradient Glow -->
    <div class="gradient-glow"/>

    <!-- Primitives -->
    <HeroPrimitive v-for="primitive in primitives" :center="center" :sides="primitive.sides" :id="primitive.id"
                   @delete="handlePrimitiveDelete" :key="primitive.id"/>

  </section>
</template>

<style scoped>

svg {
  overflow: visible;
  pointer-events: none;
}

.tunnel {
  position: relative;
}

.gradient-glow {
  width: 1000px;
  height: 50px;
  display: block;
  position: absolute;
  top: calc(50% + 100px);
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #A913FF, #F03AD7, #FF7448, #FFC325, #66FF00);
  filter: blur(45px);
  z-index: -1;
  pointer-events: none;
}

</style>

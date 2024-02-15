<script setup lang="ts">
import {useCircle, useHexagon} from '../../../src'
import {computed, onMounted, ref, Ref} from "vue";
import gsap from "gsap";

// Center of the viewport
const center: Ref<{ x: number, y: number }> = ref({x: 600, y: 300})

// Define animatable params
const numCircles = ref(40);
const circleGap = ref(0);
const circleGapAmbient = ref(0)

// Create all of our circles
const circles = computed(() => {
  const circles: useCircle[] = [];
  for (let i = 0; i < numCircles.value; i++) {
    circles.push(useCircle({
      radius: 120,
      position: computed(() => ({
        x: center.value.x + (i * (circleGap.value + circleGapAmbient.value)) - ((numCircles.value / 2) * (circleGap.value + circleGapAmbient.value)),
        y: center.value.y
      }))
    }))
  }
  return circles;
});

// Placeholder hexagon moving through the "tunnel"
const hexagonPosition = ref({x: center.value.x - 700, y: center.value.y})
const hexagonRotation = ref(0)
const hexagon = useHexagon({sideLength: 30, position: hexagonPosition, rotation: hexagonRotation})

// Start the animation
onMounted(() => {
  const timeline = gsap.timeline();
  timeline.to(circleGap, {value: 20, duration: 2, ease: "power3.out"}, 0)

  // Ambient (non-timeline) motion
  gsap.to(circleGapAmbient, {value: 2, duration: 3, ease: "power1.inOut", repeat: -1, yoyo: true})
  gsap.to(hexagonPosition.value, {x: center.value.x + 700, duration: 5, ease: "power2.inOut", repeat: -1, yoyo: true})
  setInterval(() => {
    hexagonRotation.value++
  }, 30)
})

</script>

<template>
  <section>

    <svg width="100%" viewBox="0 0 1200 600">

      <!-- Circles -->
      <path v-for="circle in circles" :d="circle.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 0.3)"
            stroke-width="1"/>

      <!-- Hexagon -->
      <path :d="hexagon.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)"
            stroke-width="2" stroke-dasharray="5" filter="url(#handwrittenFilter)"/>

      <!-- Filters -->
      <defs>
        <filter x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" id="handwrittenFilter">
          <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="5" stitchTiles="stitch" result="t1">
          </feTurbulence>
          <feColorMatrix type="matrix" values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5" result="t2">
          </feColorMatrix>
          <feComposite operator="in" in2="t2" in="SourceGraphic" result="SourceTextured">
          </feComposite>
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="1" result="f1">
          </feTurbulence>
          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceTextured" in2="f1"
                             result="f4">
          </feDisplacementMap>
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="10" result="f2">
          </feTurbulence>
          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceTextured" in2="f2"
                             result="f5">
          </feDisplacementMap>
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="100" result="f3">
          </feTurbulence>
          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="3" in="SourceTextured" in2="f3"
                             result="f6">
          </feDisplacementMap>
          <feBlend mode="multiply" in2="f4" in="f5" result="out1">
          </feBlend>
          <feBlend mode="multiply" in="out1" in2="f6" result="out2">
          </feBlend>
        </filter>
      </defs>

    </svg>

    <div class="gradient-glow"/>

  </section>
</template>

<style scoped>

svg {
  overflow: visible;
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
}

</style>

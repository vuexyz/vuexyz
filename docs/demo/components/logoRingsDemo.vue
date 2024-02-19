<script setup lang="ts">
import {ref, computed, Ref, onMounted, onUnmounted} from 'vue'
import {usePolygon} from '../../../src'
import {useStyleTransform} from '../../../src/utilities/useStyleTransform'
import {Primitive} from "../../../src/primitives/usePrimitive";

// Total number of logos
const totalLogos = 16

// Calculate the distribution of logos between two rings
const middleRingLogoCount = Math.floor(totalLogos / 3)
const outerRingLogoCount = totalLogos - middleRingLogoCount

// Set up a rotation ref
const rotation: Ref<number> = ref(0)

// Define the polygons
const middleRing: Primitive = usePolygon({sides: middleRingLogoCount, size: 140, position: {x: 344, y: 200}, rotation: computed(() => rotation.value * -1)})
const outerRing: Primitive = usePolygon({sides: outerRingLogoCount, size: 300, position: {x: 344, y: 200}, rotation})

// Compute style bindings for DOM elements on each ring, by ring primitive and index
const computeStyle = (polygon: Primitive, index: number) => { return useStyleTransform(polygon.vertices.value[index]).value }
const middleRingStyles = computed(() => index => computeStyle(middleRing, index))
const outerRingStyles = computed(() => index => computeStyle(outerRing, index))

onMounted(() => {

  // Constantly rotate the polygons
  const rotationInterval = setInterval(() => {
    rotation.value += 0.2
  }, 1000 / 60)

  // Clean up
  onUnmounted(() => {
    clearInterval(rotationInterval)
  });
});

</script>

<template>
  <div class="demo-container">
    <ul class="logo-rings">

      <!-- Middle Ring Logos -->
      <li v-for="i in middleRingLogoCount" :key="`middle-${i}`" :style="middleRingStyles(i - 1)">
        <img src="/icon.png" alt="Middle ring logo">
      </li>

      <!-- Outer Ring Logos -->
      <li v-for="i in outerRingLogoCount" :key="`outer-${i}`" :style="outerRingStyles(i - 1)">
        <img src="/icon.png" alt="Outer ring logo">
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul.logo-rings {
  margin: 0;
  padding: 0;
  position: relative;

  li {
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    aspect-ratio: 1;
    border-radius: 8px;
    transform-origin: center center;

    img {
      max-width: 100%;
      display: block;
      transform: translate(-50%, -50%);
      border: 3px solid white;
      border-radius: 50%;
    }
  }
}
</style>

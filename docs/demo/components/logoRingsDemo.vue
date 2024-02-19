<script setup lang="ts">
import {usePolygon} from '../../../src'
import {Primitive} from "../../../src/primitives/usePrimitive";
import {computed, ref, Ref} from "vue";
import {useStyleTransform} from "../../../src/utilities/useStyleTransform";

// Choose how many logos we want to show
const numLogos:Ref = ref(10)

// Create a polygon with n sides
const rotation: Ref = ref(0)
const polygon: Primitive = usePolygon({sides: numLogos, size: 300, position: {x: 344, y: 200}, rotation})

// Constantly rotate the polygon
setInterval(() => {
  rotation.value += 0.2
}, 1000 / 60)

// Create a computed function for accessing the correct vertex style tag for each index
const vertexStyles = computed(() => {
  return (index: number) => {
    return useStyleTransform(polygon.vertices.value[index]).value
  }
})

</script>

<template>
  <div class="demo-container">
    <ul class="logo-rings">

      <!-- Generate 10 logo elements in the DOM -->
      <li v-for="i in 10" :key="i" :style="vertexStyles(i - 1)">
        <img src="/icon.png" alt="Placeholder logo">
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
    width: 60px;
    aspect-ratio: 1;
    border-radius: 8px;
    transform-origin: center center;

    img {
      max-width: 100%;
      display: block;
      transform: translate(-50%, -50%);
      border: 2px solid white;
      border-radius: 8px;
    }
  }
}
</style>

<script setup lang="ts">
import {useLine, useSquare} from '../../../src'
import {computed, ComputedRef} from "vue";
import {useMouse, useWindowSize} from '@vueuse/core'

// Get the mouse position
const {x, y} = useMouse()

// Get the viewport size
const {width, height} = useWindowSize()

// Compute the center position for the square by mapping the mouses position relative to the viewport to our SVG size
const position: ComputedRef<{ x: number, y: number }> = computed(() => {
  return {
    x: (x.value / width.value) * 688,
    y: (y.value / height.value) * 400
  }
})

// Let's fire up our useSquare() composable
const primitive = useSquare({sideLength: 50, position})

// Create a line from each vertex of the square to the appropriate corner of the SVG boundary
const topRightLine = useLine({vertices: computed(() => [{x: 688, y: 0}, primitive.vertices.value[0]])})
const bottomRightLine = useLine({vertices: computed(() => [{x: 688, y: 400}, primitive.vertices.value[1]])})
const bottomLeftLine = useLine({vertices: computed(() => [{x: 0, y: 400}, primitive.vertices.value[2]])})
const topLeftLine = useLine({vertices: computed(() => [{x: 0, y: 0}, primitive.vertices.value[3]])})

</script>

<template>
  <div class="demo-container">
    <svg width="100%" viewBox="0 0 688 400">

      <!-- Square -->
      <path :d="primitive.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)" stroke-width="3"/>

      <!-- Connecting Lines -->
      <path :d="topRightLine.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)" stroke-width="3"/>
      <path :d="bottomRightLine.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)" stroke-width="3"/>
      <path :d="bottomLeftLine.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)" stroke-width="3"/>
      <path :d="topLeftLine.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)" stroke-width="3"/>

    </svg>
  </div>
</template>

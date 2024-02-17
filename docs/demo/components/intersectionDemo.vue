<script setup lang="ts">
import {useCircle, useSquare} from '../../../src'
import {ref, Ref} from "vue";
import {Primitive} from "../../../src/primitives/usePrimitive";

// Positions
const squarePosition:Ref<{x: number, y: number}> = ref({x: 344, y: 200})
const circlePosition:Ref<{x: number, y: number}> = ref({x: 400, y: 250})

// useSquare() composable
const square: Primitive = useSquare({size: 200, position: squarePosition})

// useCircle() composable
const circle: Primitive = useCircle({radius: 80, position: circlePosition})

</script>

<template>
  <div class="demo-container">
    <svg width="100%" viewBox="0 0 688 400">

      <!-- Square -->
      <path :d="square.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)" stroke-width="3"/>

      <!-- Circle -->
      <path :d="circle.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)" stroke-width="3"/>

    </svg>
  </div>
</template>

<script setup lang="ts">
import {useCircle, useHexagon, useSquare} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";
import {Primitive} from "../../../src/primitives/usePrimitive";

// useCircle
const circle: Primitive = useCircle({radius: 50, position: {x: 150, y: 400 / 2}})

//useSquare
const square: Primitive = useSquare({sideLength: 100, position: {x: 688/2, y: 400 / 2}})

// useHexagon
const hexagon: Primitive = useHexagon({size: 100, position: {x: 550, y: 400 / 2}})

</script>

<template>
  <!-- This renderer is just for demo purposes -->
  <!-- All it does is take each primitive's svgPath property and render it in an SVG context -->
  <PrimitiveSVGRenderer :primitives="[circle, square, hexagon]" label="Three 2D primitives" />
</template>

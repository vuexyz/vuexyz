<script setup lang="ts">
import {useLine} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";
import {ref, Ref } from 'vue'
import {Vertex} from "../../../src/types";

// Create a line using the useLine() composable
const start: Ref<Vertex> = ref({ x: -100, y: -100 })
const end: Ref<Vertex> = ref({ x: 100, y: 100 })
const primitive = useLine({vertices: [start, end], position: {x: 688 / 2, y: 400 / 2}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useLine({vertices: [{ x: -100, y: -100 }, { x: 100, y: 100 }]})" />
</template>

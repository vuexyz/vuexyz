<script setup lang="ts">
import {useBezierCurve} from '../../../src'
import PrimitiveSVGRenderer from "./renderer/PrimitiveSVGRenderer.vue";
import {ref, Ref } from 'vue'
import {Vertex} from "../../../src/types";

// Create a bezier curve using the useBezierCurve() composable
const start: Ref<Vertex> = ref({ x: -100, y: -100 })
const c1: Ref<Vertex> = ref({ x: -250, y: 0 })
const c2: Ref<Vertex> = ref({ x: 250, y: 0 })
const end: Ref<Vertex> = ref({ x: 100, y: 100 })
const primitive = useBezierCurve({start, c1, c2, end, position: {x: 344, y: 200}})

</script>

<template>
  <PrimitiveSVGRenderer :primitives="[primitive]" label="useBezierCurve()" />
</template>

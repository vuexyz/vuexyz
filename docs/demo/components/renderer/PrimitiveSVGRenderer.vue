<script setup lang="ts">
import {withDefaults} from 'vue'
import {Primitive} from "../../../../src/primitives/usePrimitive";
import {Vertex} from "../../../../src/types";

interface Props {
  primitives: Primitive[]
  vertices?: Vertex[]
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  primitives: (): Primitive[] => [],
  label: (): string => ''
})

</script>

<template>
  <div class="demo-container">
    <svg width="100%" viewBox="0 0 688 400">

      <text x="15" y="25" fill="white" font-family="JetBrains Mono" font-size="11px" style="text-transform: uppercase; font-weight: 600">{{ label}}</text>

      <!-- Render each primitive's SVG path -->
      <path v-for="primitive in primitives" :d="primitive.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)" stroke-width="4" filter="url(#handwrittenFilter)"/>

      <!-- Render each vertex -->
      <circle v-for="vertex in vertices" :cx="vertex.x" :cy="vertex.y" r="6" fill="rgba(255, 0, 0, 1)" filter="url(#handwrittenFilter)"/>

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
          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceTextured" in2="f1" result="f4">
          </feDisplacementMap>
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="10" result="f2">
          </feTurbulence>
          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceTextured" in2="f2" result="f5">
          </feDisplacementMap>
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="100" result="f3">
          </feTurbulence>
          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="3" in="SourceTextured" in2="f3" result="f6">
          </feDisplacementMap>
          <feBlend mode="multiply" in2="f4" in="f5" result="out1">
          </feBlend>
          <feBlend mode="multiply" in="out1" in2="f6" result="out2">
          </feBlend>
        </filter>
      </defs>

    </svg>
  </div>
</template>

<style scoped>

</style>

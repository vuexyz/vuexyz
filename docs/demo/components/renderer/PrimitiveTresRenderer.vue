<script setup lang="ts">
import {withDefaults} from 'vue'
import {Primitive} from "../../../../src/primitives/usePrimitive";
import {Vertex} from "../../../../src/types";
import {TresCanvas} from "@tresjs/core";
import {OrbitControls} from "@tresjs/cientos";
import {DoubleSide} from "three";

interface Props {
  primitives: Primitive[]
  vertices?: Vertex[]
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  primitives: (): Primitive[] => [],
  label: (): string => ''
})

console.log(props.primitives)

</script>

<template>
  <div class="demo-container">
    <TresCanvas>
      <OrbitControls/>
      <TresPerspectiveCamera
          :position="[0, 0, 600]"
          :look-at="[0, 0, 0]"
      />
      <TresMesh v-for="primitive in primitives">
        <TresExtrudeGeometry :args="[primitive.threeShape.value, {
	steps: 2,
	depth: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 2,
	bevelOffset: 0,
	bevelSegments: 3
}]"/>
        <TresMeshStandardMaterial color="#FFFFFF" :side="DoubleSide"/>
      </TresMesh>
      <TresDirectionalLight :intensity="2" :position="[5, 5, 5]" :look-at="[0,0,0]"/>
      <TresAmbientLight :intensity="1"/>
    </TresCanvas>
  </div>
</template>

<style scoped>

</style>

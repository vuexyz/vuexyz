<script setup lang="ts">
import {useCircle, useHexagon, useSquare} from '../../../src'
import {Primitive} from "../../../src/primitives/usePrimitive";
import {DoubleSide} from "three";
import {TresCanvas} from "@tresjs/core";
import {OrbitControls} from "@tresjs/cientos";

// useCircle
const circle: Primitive = useCircle({radius: 50, position: {x: -200, y: 0}})

//useSquare
const square: Primitive = useSquare({sideLength: 100, position: {x: 0, y: 0}})

// useHexagon
const hexagon: Primitive = useHexagon({size: 100, position: {x: 200, y: 0}})

</script>

<template>
  <div class="demo-container">
    <TresCanvas>
      <OrbitControls/>
      <TresPerspectiveCamera
          :position="[0, 0, 600]"
          :look-at="[0, 0, 0]"
          :fov="35"
      />
      <TresMesh v-for="primitive in [circle, square, hexagon]">
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
      <TresDirectionalLight :intensity="3" :position="[500, 500, -500]" :look-at="[0,0,0]"/>
      <TresDirectionalLight :intensity="3" :position="[-500, 500, 500]" :look-at="[0,0,0]"/>
      <TresAmbientLight :intensity="1"/>
    </TresCanvas>
  </div>
</template>

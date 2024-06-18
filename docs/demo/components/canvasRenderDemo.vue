<script setup lang="ts">
import {useHexagon} from '../../../src'
import {onMounted, onUnmounted, ref, Ref} from "vue";

// useHexagon
const rotation: Ref<number> = ref(0)
const {drawOnCanvas} = useHexagon({size: 200, position: {x: 344, y: 200}, rotation})

let RAF = null;

// Set things up when mounted
onMounted(() => {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')

  // Define how the lines look
  ctx.strokeStyle = '#0865d0';
  ctx.lineWidth = 4;

  // We'll redraw on every frame
  const draw = () => {

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw the hexagon using our composable method
    drawOnCanvas(ctx)

    // Draw the stroke
    ctx.stroke()

    // Rotate the hexagon a bit for the next frame
    rotation.value += 0.5

    // Let's loop!
    RAF = requestAnimationFrame(draw)
  }

  // Start drawing
  draw()

})

onUnmounted(() => {
  cancelAnimationFrame(RAF)
})

</script>

<template>
  <div>
    <canvas id="myCanvas" width="688px" height="400" style="width: 100%"/>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import {usePolygon} from "../../../../src";
import gsap from "gsap";

const props = defineProps<{
  id: number,
  center: { x: number, y: number }
  sides: number,
}>()

const emit = defineEmits(['delete']);

const colorPalettes = [
  {
    start: '#833ab4',
    center: '#ff3f3f',
    end: '#fcb045'
  },
  {
    start: '#61be0c',
    center: '#d5ff0e',
    end: '#28ddff'
  },
  {
    start: '#0ffff0',
    center: '#3994ff',
    end: '#a628ff'
  },
  {
    start: '#0f44ff',
    center: '#8139ff',
    end: '#ff289c'
  },
  {
    start: '#ff6f0f',
    center: '#ffc439',
    end: '#99ff28'
  }
]

const colorIndex = ref(Math.floor(Math.random() * colorPalettes.length));
const rotationDirection = ref(Math.random() > 0.5 ? 1 : -1)

let movementInterval = null
let tunnelEntranceWatch = null

const movementSpeed = ref(0)
const rotationSpeed = ref(0)
const horizontalOffset = ref(0)
const verticalOffset = ref(-150 + (Math.random() * 300))
const scale = ref(0)

const polygonPosition = computed(() => {
  return {x: props.center.x - 800 + horizontalOffset.value, y: props.center.y + verticalOffset.value}
})
const polygonRotation = ref(0)
const polygon = usePolygon({sides: props.sides, size: 75, position: polygonPosition, rotation: polygonRotation, scale})


onMounted(() => {

  // Start moving the polygon
  gsap.to(scale, {value: 1, duration: 1, ease: "power3.inOut"})
  gsap.to(movementSpeed, {value: 0.3, duration: 1, ease: "power3.inOut"})
  gsap.to(rotationSpeed, {value: 0.1 * rotationDirection.value, duration: 5, ease: "power3.inOut"})
  gsap.to(verticalOffset, {value: verticalOffset.value / 10, duration: 7, ease: "power1.inOut"}).then(() => {
    gsap.to(verticalOffset, {value: verticalOffset.value * 10, duration: 5, ease: "power1.inOut"})
  })

  // Watch to see when we enter the tunnel
  tunnelEntranceWatch = watch(polygonPosition, (newVal) => {
        if (newVal.x > props.center.x - 500) {
          gsap.to(rotationSpeed, {value: 4 * rotationSpeed.value, duration: 1, ease: "power3.inOut"})
          gsap.to(movementSpeed, {value: 3.8, duration: 1.1, ease: "power1.inOut"}).then(() => {
            gsap.to(rotationSpeed, {value: 0, duration: 6, ease: "power1.in"})
            gsap.to(movementSpeed, {value: 0.3, duration: 1.1, ease: "power1.inOut"}).then(() => {
              gsap.to(scale, {value: 0, duration: 5, ease: "power3.in"}).then(() => {
                emit('delete', props.id)
              })
            })
          })
          tunnelEntranceWatch()
        }
      },
      {
        deep: true
      }
  )

  // Draw loop
  const movementInterval = () => {
    horizontalOffset.value += movementSpeed.value
    polygonRotation.value += rotationSpeed.value
    requestAnimationFrame(movementInterval)
  }
  movementInterval()

})

</script>

<template>
  <svg width="100%" viewBox="0 0 1200 600" class="primitive"
       :class="{'primitive--render': polygonPosition.x > props.center.x - 200}">

    <!-- Sketch -->
    <path class="sketch-path" :d="polygon.svgPath.value" fill="none" stroke="rgba(255, 255, 255, 1)"
          stroke-width="2" stroke-dasharray="5" filter="url(#handwrittenFilter)"/>

    <!-- Filled -->
    <path class="render-path" :d="polygon.svgPath.value" :fill="`url(#gradient_${props.id})`" />

    <!-- Filters -->
    <defs>

      <!-- Sketch Effect -->
      <filter x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" id="handwrittenFilter">
        <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="5" stitchTiles="stitch" result="t1">
        </feTurbulence>
        <feColorMatrix type="matrix" values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5" result="t2">
        </feColorMatrix>
        <feComposite operator="in" in2="t2" in="SourceGraphic" result="SourceTextured">
        </feComposite>
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="1" result="f1">
        </feTurbulence>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceTextured" in2="f1"
                           result="f4">
        </feDisplacementMap>
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="10" result="f2">
        </feTurbulence>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="5" in="SourceTextured" in2="f2"
                           result="f5">
        </feDisplacementMap>
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="100" result="f3">
        </feTurbulence>
        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="3" in="SourceTextured" in2="f3"
                           result="f6">
        </feDisplacementMap>
        <feBlend mode="multiply" in2="f4" in="f5" result="out1">
        </feBlend>
        <feBlend mode="multiply" in="out1" in2="f6" result="out2">
        </feBlend>
      </filter>

      <!-- Final Color Gradient -->
      <linearGradient :id="`gradient_${props.id}`" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" :stop-color="colorPalettes[colorIndex].start"/>
        <stop offset="50%" :stop-color="colorPalettes[colorIndex].center"/>
        <stop offset="100%" :stop-color="colorPalettes[colorIndex].end"/>
      </linearGradient>

    </defs>

  </svg>
</template>

<style scoped>

svg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: visible;
}

.primitive {
  filter: drop-shadow(0px 0px 0 rgba(68, 88, 221, 0.8));
  transition: filter 1s ease;

  .sketch-path {
    opacity: 1;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: opacity 1.5s ease, clip-path 0.6s ease;
  }

  .render-path {
    opacity: 0;
    clip-path: polygon(0 0, 100% 0, 0 0, 0 100%);
    transition: opacity 0.5s ease, clip-path 0.6s ease;
  }

  &.primitive--render {
    filter: drop-shadow(20px 20px 0 rgba(68, 88, 221, 0.5));

    .sketch-path {
      opacity: 0;
      clip-path: polygon(100% 100%, 100% 0, 100% 100%, 0 100%);
    }

    .render-path {
      opacity: 1;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
}

</style>

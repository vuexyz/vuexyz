import { toValue } from '@vueuse/shared'
import type { MaybeRefOrGetter } from '@vueuse/shared'
import {computed, ComputedRef, ref, Ref, watchEffect} from 'vue'

interface CircleConfig {
  radius?: MaybeRefOrGetter<number>
  center?: MaybeRefOrGetter<{ x: number; y: number }>
}

interface Circle {
  getPosition: (percentage: MaybeRefOrGetter<number>) => { x: number; y: number }
  getSVGPath: () => ComputedRef<string>
}

/**
 * Composable for working with circles.
 *
 * @see https://vuexyz.org/primitives/circle
 * @param config - Configuration object for the circle
 */
export function useCircle(config?: CircleConfig): {
  getPosition: (percentage?: MaybeRefOrGetter<number>) => Ref<{ x: number; y: number }>;
  getSVGPath: ComputedRef<string>
} {
  const radius = config?.radius ?? 0
  const center = config?.center ?? { x: 0, y: 0 }

  /**
   * Returns the position of a point on the circle's perimeter.
   * Pass in a percentage to get the position of a point on the perimeter (0-1).
   * @param percentage
   */
  function getPosition(percentage: MaybeRefOrGetter<number> = 0): Ref<{ x: number; y: number }> {
    const position = ref({ x: 0, y: 0 })

    watchEffect(() => {
      position.value = {
        x: +(toValue(center).x + (Math.cos((360 * toValue(percentage)) * (Math.PI / 180)) * toValue(radius))).toFixed(10),
        y: +(toValue(center).y + (Math.sin((360 * toValue(percentage)) * (Math.PI / 180)) * toValue(radius))).toFixed(10),
      }
    })

    return position
  }

  /**
   * Returns the SVG path for the circle.
   */
  const getSVGPath: ComputedRef<string> = computed(() =>{
    return `M ${toValue(center).x} ${toValue(center).y} m -${toValue(radius)}, 0 a ${toValue(radius)},${toValue(radius)} 0 1,0 ${toValue(radius) * 2},0 a ${toValue(radius)},${toValue(radius)} 0 1,0 -${toValue(radius) * 2},0`
  })

  return {
    getPosition,
    getSVGPath,
  }
}

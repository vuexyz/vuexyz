import type { MaybeRefOrGetter } from '@vueuse/shared'
import {computed, ref, Ref, toValue, watchEffect} from 'vue'
import type { ComputedRef } from 'vue'
import type { Edge, PrimitiveConfig, Vertex } from '../types'
import { usePrimitive } from '../usePrimitive'

interface TriangleConfig extends PrimitiveConfig {
  base?: MaybeRefOrGetter<number>
  height?: MaybeRefOrGetter<number>
}

interface Triangle {
  getPosition: (percentage: MaybeRefOrGetter<number>) => { x: number; y: number }
  vertices: ComputedRef<Vertex[]>
  edges: ComputedRef<Edge[]>
  getSVGPath: ComputedRef<string>
}

export function useTriangle(config?: TriangleConfig): {
  getPosition: (percentage?: MaybeRefOrGetter<number>) => Ref<{ x: number; y: number }>;
  vertices: ComputedRef<any[]>;
  edges: ComputedRef<any[]>;
  getSVGPath: ComputedRef<string>
} {
  const { center, rotatePoint } = usePrimitive(config)
  const base = config?.base ?? 0
  const height = config?.height ?? 0

  // Vertices
  const vertices = computed(() => {
    const list = []
    list.push(rotatePoint(+(toValue(center).x) - toValue(base) / 2, +(toValue(center).y) + toValue(height) / 2))
    list.push(rotatePoint(+(toValue(center).x) + toValue(base) / 2, +(toValue(center).y) + toValue(height) / 2))
    list.push(rotatePoint(+(toValue(center).x), +(toValue(center).y - toValue(height) / 2)))
    return list
  })

  // Edges
  const edges = computed(() => {
    const edgeList = []
    for (let i = 0; i < vertices.value.length; i++) {
      edgeList.push({
        from: vertices.value[i],
        to: vertices.value[(i + 1) % vertices.value.length],
      })
    }
    return edgeList
  })

  /**
   * Get the position of a point on the triangle's edge
   * @param percentage
   */
  function getPosition(percentage: MaybeRefOrGetter<number> = 0): Ref<{ x: number; y: number }> {
    const position = ref({ x: 0, y: 0 })

    watchEffect(() => {
      const side = Math.floor((toValue(percentage) * 3))
      const localPercentage = (toValue(percentage) * 3) - side
      const startVertex = vertices.value[side]
      const endVertex = vertices.value[(side + 1) % vertices.value.length]
      const x = startVertex.x + localPercentage * (endVertex.x - startVertex.x)
      const y = startVertex.y + localPercentage * (endVertex.y - startVertex.y)
      position.value = {
        x: +(x).toFixed(10),
        y: +(y).toFixed(10),
      }
    })

    return position
  }

  /**
   * Returns the SVG path for the triangle.
   */
  const getSVGPath: ComputedRef<string> = computed(() =>{
    return `M ${toValue(vertices.value[0].x)} ${toValue(vertices.value[0].y)} L ${toValue(vertices.value[1].x)} ${toValue(vertices.value[1].y)} L ${toValue(vertices.value[2].x)} ${toValue(vertices.value[2].y)} Z`
  })

  return {
    getPosition,
    getSVGPath,
    vertices,
    edges,
  }
}

import type {MaybeRefOrGetter} from '@vueuse/shared'
import {computed, toValue} from 'vue'
import type {ComputedRef} from 'vue'
import type {Edge, LineSegment, Vertex} from '../types'
import {usePrimitive, Primitive, PrimitiveConfig} from '../usePrimitive'

interface PolygonConfig extends Omit<PrimitiveConfig, 'vertices' | 'edges' | 'faces' | 'isClosed'> {
    sides: MaybeRefOrGetter<number>
    sideLength: MaybeRefOrGetter<number>
}

/**
 * Composable for working with a polygon.
 *
 * @see https://vuexyz.org/primitives/usepolygon
 */
export function usePolygon(config?: PolygonConfig): Primitive {

    // Set default values
    const sides = config?.sides ?? 4
    const sideLength = config?.sideLength ?? 100

    // Calculate the angle step for each side
    const angleStep = computed(() => (Math.PI * 2) / toValue(sides))

    // Define vertices
    const vertices: ComputedRef<Vertex[]> = computed(() => {
        const vertices: Vertex[] = []
        const isEven = toValue(sides) % 2 === 0
        let initialRotation: number
        if (isEven) {
            initialRotation = -Math.PI / 2 + angleStep.value / 2
        } else {
            initialRotation = -Math.PI / 2
        }
        for (let i = 0; i < toValue(sides); i++) {
            vertices.push({
                x: toValue(sideLength) * Math.cos(initialRotation + angleStep.value * i),
                y: toValue(sideLength) * Math.sin(initialRotation + angleStep.value * i),
            } as Vertex)
        }
        return vertices
    })

    // Define edges
    const edges: ComputedRef<Edge[]> = computed(() => {
        const edges: Edge[] = []
        const vertexCount = vertices.value.length
        for (let i = 0; i < vertexCount; i++) {
            edges.push([{
                type: 'line',
                start: vertices.value[i],
                end: vertices.value[(i + 1) % vertexCount], // Use modulo to loop back to the first vertex
            } as LineSegment] as Edge)
        }
        return edges
    })


    // Define faces
    const faces: ComputedRef<any[]> = computed(() => {
        return [edges.value] // Single face comprised of all edges
    })

    // Return destructed primitive (plus any additional properties, if applicable)
    return {
        ...usePrimitive({...config, vertices, edges, faces})
    }
}

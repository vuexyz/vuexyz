import type {MaybeRefOrGetter} from '@vueuse/shared'
import {computed, toValue} from 'vue'
import type {ComputedRef} from 'vue'
import type {Edge, LineSegment, Vertex} from '../types'
import {usePrimitive, Primitive, PrimitiveConfig} from '../usePrimitive'

interface TriangleConfig extends Omit<PrimitiveConfig, 'vertices' | 'edges' | 'faces' | 'isClosed'> {
    base?: MaybeRefOrGetter<number>
    height?: MaybeRefOrGetter<number>
}

/**
 * Composable for working with a triangle.
 *
 * @see https://vuexyz.org/primitives/triangle
 */
export function useTriangle(config?: TriangleConfig): Primitive {

    // Set default values
    const base = config?.base ?? 0
    const height = config?.height ?? 0

    // Define vertices
    const vertices: ComputedRef<Vertex[]> = computed(() => {
        const vertices: Vertex[] = []
        vertices.push({x: 0 - toValue(base) / 2, y: toValue(height) / 2} as Vertex)
        vertices.push({x: 0, y: 0 - toValue(height) / 2} as Vertex)
        vertices.push({x: toValue(base) / 2, y: toValue(height) / 2} as Vertex)
        return vertices
    })

    // Define edges
    const edges: ComputedRef<Edge[]> = computed(() => {
        const edges: Edge[] = []
        edges.push([
            {
                type: 'line',
                start: vertices.value[0],
                end: vertices.value[1],
            } as LineSegment
        ]);
        edges.push([
            {
                type: 'line',
                start: vertices.value[1],
                end: vertices.value[2],
            } as LineSegment
        ]);
        edges.push([
            {
                type: 'line',
                start: vertices.value[2],
                end: vertices.value[0],
            } as LineSegment
        ]);
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

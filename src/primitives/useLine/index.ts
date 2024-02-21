import type {MaybeRefOrGetter} from '@vueuse/shared'
import {computed, toValue} from 'vue'
import type {ComputedRef} from 'vue'
import type {Edge, LineSegment, Vertex} from '../../types'
import {usePrimitive, Primitive, PrimitiveConfig} from '../usePrimitive'

interface LineConfig extends Omit<PrimitiveConfig, 'vertices' | 'edges' | 'faces' | 'isClosed'> {
    vertices: MaybeRefOrGetter<Vertex>[] | MaybeRefOrGetter<MaybeRefOrGetter<Vertex>[]>
}

/**
 * Composable for working with a line (2+ vertices).
 *
 * @see https://vuexyz.org/primitives/useline
 */
export function useLine(config?: LineConfig): Primitive {

    // Define vertices (provided by the user in this case)
    const vertices: ComputedRef<Vertex[]> = computed(() => {
        return toValue(config?.vertices).map(vertex => toValue(vertex)) ?? []
    })

    // Define edges
    const edges: ComputedRef<Edge[]> = computed(() => {
        const edges: Edge[] = []
        for (let i = 0; i < vertices.value.length - 1; i++) {
            edges.push([
                {
                    type: 'line',
                    start: vertices.value[i],
                    end: vertices.value[i + 1],
                } as LineSegment
            ]);
        }
        return edges
    })

    // Define faces (a line is not a closed shape)
    const faces: ComputedRef<any[]> = computed(() => [])

    // Return destructured primitive (plus any additional properties, if applicable)
    return {
        ...usePrimitive({...config, vertices, edges, faces, isClosed: false})
    }
}

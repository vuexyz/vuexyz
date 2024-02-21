import type {MaybeRefOrGetter} from '@vueuse/shared'
import {computed, toValue} from 'vue'
import type {ComputedRef} from 'vue'
import type {Edge, LineSegment, Vertex} from '../../types'
import {usePrimitive, Primitive, PrimitiveConfig} from '../usePrimitive'

interface RectangleConfig extends Omit<PrimitiveConfig, 'vertices' | 'edges' | 'faces' | 'isClosed'> {
    width: MaybeRefOrGetter<number>
    height: MaybeRefOrGetter<number>
}

/**
 * Composable for working with a rectangle.
 *
 * @see https://vuexyz.org/primitives/userectangle
 */
export function useRectangle(config?: RectangleConfig): Primitive {
    // Set default values
    const width = "width" in config ? toValue(config.width) : 100
    const height = "height" in config ? toValue(config.height) : 50

    // Define vertices
    const vertices: ComputedRef<Vertex[]> = computed(() => {
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        const vertices: Vertex[] = [
            {x: -halfWidth, y: -halfHeight, z: 0},
            {x: halfWidth, y: -halfHeight, z: 0},
            {x: halfWidth, y: halfHeight, z: 0},
            {x: -halfWidth, y: halfHeight, z: 0}
        ]
        return vertices
    })

    // Define edges
    const edges: ComputedRef<Edge[]> = computed(() => {
        const edges: Edge[] = []
        const n = vertices.value.length;
        for (let i = 0; i < n; i++) {
            edges.push([
                {
                    type: 'line',
                    start: vertices.value[i],
                    end: vertices.value[(i + 1) % n],
                } as LineSegment
            ]);
        }
        return edges
    })

    // Define faces (a line is not a closed shape)
    const faces: ComputedRef<any[]> = computed(() => {
        return [edges.value] // Single face comprised of all edges
    })

    // Return destructured primitive (plus any additional properties, if applicable)
    return {
        ...usePrimitive({...config, vertices, edges, faces})
    }
}

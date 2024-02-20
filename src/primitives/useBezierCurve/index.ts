import {computed, toValue} from 'vue'
import type {ComputedRef} from 'vue'
import type {CurveSegment, Edge, Vertex} from '../../types'
import {usePrimitive, Primitive, PrimitiveConfig} from '../usePrimitive'
import {MaybeRefOrGetter} from "@vueuse/shared";

interface BezierConfig extends Omit<PrimitiveConfig, 'vertices' | 'edges' | 'faces' | 'isClosed'> {
    start: MaybeRefOrGetter<Vertex>
    c1: MaybeRefOrGetter<Vertex>
    c2: MaybeRefOrGetter<Vertex>
    end: MaybeRefOrGetter<Vertex>
}

/**
 * Composable for working with a Bézier curve.
 *
 * @see https://vuexyz.org/primitives/usebeziercurve
 */
export function useBezierCurve(config: BezierConfig): Primitive {

    // Define vertices (provided by the user in this case)
    const vertices: ComputedRef<Vertex[]> = computed(() => {
        return [toValue(config?.start), toValue(config?.end)]
    })

    // Define edges
    const edges: ComputedRef<Edge[]> = computed(() => {
        const edges: Edge[] = []
        edges.push([
            {
                type: 'curve',
                start: toValue(config?.start),
                c1: toValue(config?.c1),
                c2: toValue(config?.c2),
                end: toValue(config?.end),
            } as CurveSegment,
        ]);
        return edges
    })

    // Define faces (a Bézier curve is not a closed shape)
    const faces: ComputedRef<any[]> = computed(() => [])

    // Return destructed primitive (plus any additional properties, if applicable)
    return {
        ...usePrimitive({...config, vertices, edges, faces, isClosed: false})
    }
}

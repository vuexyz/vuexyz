import {computed, ComputedRef} from 'vue';
import {Edge, Vertex} from '../../types';
import {MaybeRefOrGetter} from '@vueuse/shared';
import {toValue} from '@vueuse/core';
import {useEdgeLength} from "../useEdgeLength";
import {usePointOnEdge} from "../usePointOnEdge";
import {Primitive} from "../../primitives/usePrimitive";

/**
 * Takes a primitive and returns a point along it's combined edges at a given percentage.
 *
 * @see https://vuexyz.org/utilities/usePointOnPrimitive
 */
export function usePointOnPrimitive(primitive: MaybeRefOrGetter<Primitive> | MaybeRefOrGetter<Edge[]>, percentage: MaybeRefOrGetter<number> = 0): {
    point: ComputedRef<Vertex>
} {
    const edges: ComputedRef<Edge[]> = computed(() => {
        const primitiveVal = toValue(primitive)
        if (Array.isArray(primitiveVal)) {
            return primitiveVal
        }
        return 'edges' in primitiveVal ? primitiveVal.edges.value : []
    })
    const point = computed((): Vertex => {
        const totalLength = edges.value.reduce((acc, edge) => acc + useEdgeLength(edge).length.value, 0)
        const targetLength = totalLength * toValue(percentage)
        let accumulatedLength = 0
        for (const edge of edges.value) {
            const { length} = useEdgeLength(edge);
            if (accumulatedLength + length.value >= targetLength) {
                const edgePercentage = (targetLength - accumulatedLength) / length.value
                const { point } = usePointOnEdge(edge, edgePercentage)
                return point.value;
            }
            accumulatedLength += length.value
        }
        return {x: 20, y: 20, z: 0}
    })
    return {point}
}

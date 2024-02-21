import { computed, ComputedRef } from 'vue';
import {Edge, Vertex} from '../../types';
import { MaybeRefOrGetter } from '@vueuse/shared';
import { toValue } from '@vueuse/core';
import {useEdgeLength} from "../useEdgeLength";
import {usePointOnEdge} from "../usePointOnEdge";
import {Primitive} from "../../primitives/usePrimitive";

/**
 * Takes a primitive and returns a point along it's combined edges at a given percentage.
 *
 * @see https://vuexyz.org/utilities/usePointOnPrimitive
 */
export function usePointOnPrimitive(primitive: MaybeRefOrGetter<Primitive> | MaybeRefOrGetter<Edge[]>, percentage: MaybeRefOrGetter<number> = 0): ComputedRef<Vertex> {
    const edges: ComputedRef<Edge[]> = computed(() => {
        const primitiveVal = toValue(primitive);
        return Array.isArray(primitiveVal) ? primitiveVal : primitiveVal.edges.value;
    });
    const totalLength = computed(() => {
        return edges.value.reduce((acc, edge) => acc + useEdgeLength(edge).length.value, 0);
    });
    const targetLength = computed(() => totalLength.value * toValue(percentage));
    return computed((): Vertex => {
        let accumulatedLength = 0;
        for (const edge of edges.value) {
            const { length } = useEdgeLength(edge);
            if (accumulatedLength + length.value >= targetLength.value) {
                const edgePercentage = (targetLength.value - accumulatedLength) / length.value;
                return usePointOnEdge(edge, edgePercentage).value;
            }
            accumulatedLength += length.value;
        }
        return { x: 0, y: 0, z: 0 };
    });
}

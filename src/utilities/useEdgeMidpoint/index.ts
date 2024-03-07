import {Edge, Vertex} from "../../types";
import {computed, ComputedRef} from "vue";
import {MaybeRefOrGetter} from "@vueuse/shared";
import {usePointOnEdge} from "../usePointOnEdge";

/**
 * Takes an edge and returns the midpoint of the edge.
 *
 * @see https://vuexyz.org/utilities/useMidpoint
 */
export function useEdgeMidpoint(edge: MaybeRefOrGetter<Edge>): { midpoint: ComputedRef<Vertex> } {
    const midpoint = computed(() => {
        const {point} = usePointOnEdge(edge, 0.5)
        return point.value;
    })
    return {midpoint}
}

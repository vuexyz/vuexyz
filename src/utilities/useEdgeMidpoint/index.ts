import {Edge, Vertex} from "../../types";
import {computed, ComputedRef} from "vue";
import {MaybeRefOrGetter} from "@vueuse/shared";
import {usePointOnEdge} from "../usePointOnEdge";

/**
 * Takes an edge and returns the midpoint of the edge.
 *
 * @see https://vuexyz.org/utilities/useMidpoint
 */
export function useEdgeMidpoint(edge: MaybeRefOrGetter<Edge>): ComputedRef<Vertex> {
    return computed(() => {
        return usePointOnEdge(edge, 0.5).value;
    })
}

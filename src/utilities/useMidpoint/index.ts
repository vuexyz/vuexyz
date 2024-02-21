import {Edge, Vertex} from "../../types";
import {computed, ComputedRef, toValue} from "vue";
import {MaybeRefOrGetter} from "@vueuse/shared";

/**
 * Takes an edge and returns the midpoint of the edge.
 *
 * @see https://vuexyz.org/utilities/useMidpoint
 */
export function useMidpoint(edge: MaybeRefOrGetter<Edge>): ComputedRef<Vertex> {
    return computed(() => {
        return {x: 0, y: 0, z: 0}
    })
}

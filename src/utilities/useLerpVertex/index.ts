import {Vertex} from "../../types";
import {computed, ComputedRef, toValue} from "vue";
import {MaybeRefOrGetter} from "@vueuse/shared";

/**
 * Takes two vertices and returns a new vertex that is the linear interpolation between the two, based on a given percentage.
 *
 * @see https://vuexyz.org/utilities/useLerpVertex
 */
export function useLerpVertex(start: MaybeRefOrGetter<Vertex> = {x: 0, y: 0, z: 0}, end: MaybeRefOrGetter<Vertex> = {x: 0, y: 0, z: 0}, percentage: MaybeRefOrGetter<number> = 0): ComputedRef<Vertex> {
    return computed(() => {
        const x = toValue(start).x + toValue(percentage) * (toValue(end).x - toValue(start).x);
        const y = toValue(start).y + toValue(percentage) * (toValue(end).y - toValue(start).y);
        const z = typeof toValue(start).z === 'number' && typeof toValue(end).z === 'number' ? toValue(start).z + toValue(percentage) * (toValue(end).z - toValue(start).z) : 0;
        return { x, y, z };
    })
}

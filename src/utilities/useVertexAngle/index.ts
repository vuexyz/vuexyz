import {Vertex} from "../../types";
import {computed, ComputedRef, toValue} from "vue";
import {MaybeRefOrGetter} from "@vueuse/shared";

/**
 * Takes a start and end vertex, and returns both the angle and distance between them.
 *
 * @see https://vuexyz.org/utilities/useVertexAngle
 */
export function useVertexAngle(start: MaybeRefOrGetter<Vertex> = {x: 0, y: 0, z: 0}, end: MaybeRefOrGetter<Vertex> = {x: 0, y: 0, z: 0}): {
    angle: ComputedRef<number>,
    distance: ComputedRef<number>
} {
    const angle = computed(() => {
        const radianAngle = Math.atan2(toValue(end).y - toValue(start).y, toValue(end).x - toValue(start).x);
        return radianAngle * (180 / Math.PI); // Convert to degrees
    })
    const distance = computed(() => {
        const x = toValue(end).x - toValue(start).x
        const y = toValue(end).y - toValue(start).y
        const z = (toValue(end).z ?? 0) - (toValue(start).z ?? 0)
        return Math.sqrt(x * x + y * y + z * z)
    })
    return {angle, distance};
}

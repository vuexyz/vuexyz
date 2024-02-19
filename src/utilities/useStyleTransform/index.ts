import {Vertex} from "../../primitives/types";
import {computed, ComputedRef, toValue} from "vue";
import {MaybeRefOrGetter} from "@vueuse/shared";

/**
 * Takes a Vertex and generates a CSS transform string for use in a style tag.
 *
 * @see https://vuexyz.org/utilities/useStyleTransform
 */
export function useStyleTransform(vertex: MaybeRefOrGetter<Vertex>): ComputedRef<string> {
    return computed(() => {
        return `position: absolute; top: 0; left: 0; translate3d(${toValue(vertex).x || 0}px, ${toValue(vertex).y || 0}px, ${toValue(vertex).z || 0}px)`
    })
}

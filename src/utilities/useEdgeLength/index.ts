import {Edge} from "../../types";
import {computed, ComputedRef, toValue} from "vue";
import {MaybeRefOrGetter} from "@vueuse/shared";
import {Bezier} from "bezier-js";

/**
 * Takes an edge and returns the total length of the edge, along with the length of each segment.
 *
 * @see https://vuexyz.org/utilities/useEdgeLength
 */
export function useEdgeLength(edge: MaybeRefOrGetter<Edge>): { length: ComputedRef<number>, segmentLengths: ComputedRef<number[]> } {
    const edgeVal = toValue(edge)
    const segmentLengths = computed(() => edgeVal.map(segment => {
        if (segment.type === 'line') {
            const dx = segment.end.x - segment.start.x;
            const dy = segment.end.y - segment.start.y;
            const dz = (segment.end.z || 0) - (segment.start.z || 0);
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        } else { // curve
            const points = [segment.start, segment.c1, segment.c2, segment.end];
            const bezier = new Bezier(points.map(p => ({x: p.x, y: p.y})));
            return bezier.length();
        }
    }));
    const length = computed(() => segmentLengths.value.reduce((sum, length) => sum + length, 0));
    return {length, segmentLengths};
}

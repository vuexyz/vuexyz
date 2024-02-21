import { computed, ComputedRef } from 'vue';
import { Edge, Vertex } from '../../types';
import { MaybeRefOrGetter } from '@vueuse/shared';
import { toValue } from '@vueuse/core';
import {Bezier} from 'bezier-js';
import {useEdgeLength} from "../useEdgeLength";

/**
 * Takes an edge and returns a point along it at a given percentage.
 *
 * @see https://vuexyz.org/utilities/usePointOnEdge
 */
export function usePointOnEdge(edge: MaybeRefOrGetter<Edge>, percentage: MaybeRefOrGetter<number> = 0): ComputedRef<Vertex> {
    return computed(() => {
        const edgeVal = toValue(edge);
        const percentageVal = toValue(percentage);
        const { length, segmentLengths } = useEdgeLength(edgeVal);
        let accumulatedLength = 0;
        const targetLength = percentageVal * length.value;
        for (let i = 0; i < edgeVal.length; i++) {
            const segment = edgeVal[i];
            const segmentLength = segmentLengths.value[i];
            if ((accumulatedLength + segmentLength) >= targetLength) {
                const segmentPercentage = (targetLength - accumulatedLength) / segmentLength;
                if (segment.type === 'line') {
                    const x = segment.start.x + (segment.end.x - segment.start.x) * segmentPercentage;
                    const y = segment.start.y + (segment.end.y - segment.start.y) * segmentPercentage;
                    const z = (segment.start.z || 0) + ((segment.end.z || 0) - (segment.start.z || 0)) * segmentPercentage;
                    return { x, y, z };
                } else { // curve
                    const bezier = new Bezier(segment.start, segment.c1, segment.c2, segment.end);
                    const point = bezier.get(segmentPercentage);
                    return { x: point.x, y: point.y, z: point.z || 0 };
                }
            }
            accumulatedLength += segmentLength;
        }
        return { x: 0, y: 0, z: 0 }; // fallback
    });
}

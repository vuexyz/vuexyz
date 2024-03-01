import {computed, ComputedRef} from 'vue';
import {Vertex} from '../../types';
import {MaybeRefOrGetter} from '@vueuse/shared';
import {toValue} from '@vueuse/core';
import {Primitive} from "../../primitives/usePrimitive";
import {usePointOnPrimitive} from "../usePointOnPrimitive";

/**
 * Takes a primitive and a number of vertices, returning an array of vertices that are evenly distributed along the primitive's edges.
 *
 * @see https://vuexyz.org/utilities/useDistributePoints
 */
export function useDistributePoints(primitive: MaybeRefOrGetter<Primitive>, count: MaybeRefOrGetter<number> = 0, options: MaybeRefOrGetter<{
    method: MaybeRefOrGetter<'around' | 'between'>,
    align: MaybeRefOrGetter<'start' | 'center' | 'end'>
}> = {method: 'around', align: 'center'}): { vertices: ComputedRef<Vertex[]>, percentages: ComputedRef<number[]> } {
    const percentages = computed(() => {
        const numberOfVertices: number = toValue(count)
        const method = toValue(toValue(options).method)
        const align = toValue(toValue(options).align)
        let distributionPercentages = [];
        if (method === 'between' || numberOfVertices <= 1) {
            for (let i = 0; i < numberOfVertices; i++) {
                distributionPercentages[i] = i / (numberOfVertices - 1 || 1)
            }
        } else {
            let offset = 1 / numberOfVertices
            if (align === 'center') {
                for (let i = 0; i < numberOfVertices; i++) {
                    distributionPercentages[i] = (i * offset) + (offset / 2);
                }
            } else if (align === 'end') {
                for (let i = 0; i < numberOfVertices; i++) {
                    distributionPercentages[i] = (i * offset) + offset;
                }
            } else {
                for (let i = 0; i < numberOfVertices; i++) {
                    distributionPercentages[i] = i * offset;
                }
            }
        }
        return distributionPercentages
    })
    const vertices = computed((): Vertex[] => {
        return percentages.value.map(percentage => usePointOnPrimitive(toValue(primitive), percentage).value);
    });
    return {vertices, percentages}
}


import type {MaybeRefOrGetter} from '@vueuse/shared'
import {DistributiveOmit} from '../../types'
import {Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";

/**
 * Composable for working with a triangle.
 *
 * @see https://vuexyz.org/primitives/usetriangle
 */
export function useTriangle(config?: DistributiveOmit<PolygonConfig, 'sides'>): Primitive {
    return usePolygon({...config, sides: 3})
}

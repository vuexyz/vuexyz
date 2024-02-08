import {usePrimitive, Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";

/**
 * Composable for working with a square.
 *
 * @see https://vuexyz.org/primitives/usesquare
 */
export function useSquare(config?: Omit<PolygonConfig, 'sides'>): Primitive {
    return usePolygon({...config, sides: 4})
}

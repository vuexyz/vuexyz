import {Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";

/**
 * Composable for working with a pentagon.
 *
 * @see https://vuexyz.org/primitives/usepentagon
 */
export function usePentagon(config?: Omit<PolygonConfig, 'sides'>): Primitive {
    return usePolygon({...config, sides: 5})
}

import {Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";

/**
 * Composable for working with a hexagon.
 *
 * @see https://vuexyz.org/primitives/usehexagon
 */
export function useHexagon(config?: PolygonConfig): Primitive {
    return usePolygon({...config, sides: 6})
}

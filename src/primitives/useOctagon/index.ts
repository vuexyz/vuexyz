import {Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";

/**
 * Composable for working with an octagon.
 *
 * @see https://vuexyz.org/primitives/useoctagon
 */
export function useOctagon(config?: PolygonConfig): Primitive {
    return usePolygon({...config, sides: 8})
}

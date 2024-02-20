import {Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";
import {DistributiveOmit} from "../../types";

/**
 * Composable for working with a hexagon.
 *
 * @see https://vuexyz.org/primitives/usehexagon
 */
export function useHexagon(config?: DistributiveOmit<PolygonConfig, 'sides'>): Primitive {
    return usePolygon({...config, sides: 6})
}

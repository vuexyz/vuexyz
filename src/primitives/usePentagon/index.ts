import {Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";
import {DistributiveOmit} from "../../types";

/**
 * Composable for working with a pentagon.
 *
 * @see https://vuexyz.org/primitives/usepentagon
 */
export function usePentagon(config?: DistributiveOmit<PolygonConfig, 'sides'>): Primitive {
    return usePolygon({...config, sides: 5})
}

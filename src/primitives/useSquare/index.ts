import {Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";
import {DistributiveOmit} from "../../types";

/**
 * Composable for working with a square.
 *
 * @see https://vuexyz.org/primitives/usesquare
 */
export function useSquare(config?: DistributiveOmit<PolygonConfig, 'sides'>): Primitive {
    return usePolygon({...config, sides: 4})
}

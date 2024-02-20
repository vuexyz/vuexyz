import {Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";
import {DistributiveOmit} from "../../types";

/**
 * Composable for working with an octagon.
 *
 * @see https://vuexyz.org/primitives/useoctagon
 */
export function useOctagon(config?: DistributiveOmit<PolygonConfig, 'sides'>): Primitive {
    return usePolygon({...config, sides: 8})
}

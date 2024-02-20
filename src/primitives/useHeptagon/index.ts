import {Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";
import {DistributiveOmit} from "../../types";

/**
 * Composable for working with a heptagon.
 *
 * @see https://vuexyz.org/primitives/useheptagon
 */
export function useHeptagon(config?: DistributiveOmit<PolygonConfig, 'sides'>): Primitive {
    return usePolygon({...config, sides: 7})
}

import {Primitive} from '../usePrimitive'
import {PolygonConfig, usePolygon} from "../usePolygon";

/**
 * Composable for working with a heptagon.
 *
 * @see https://vuexyz.org/primitives/useheptagon
 */
export function useHeptagon(config?: PolygonConfig): Primitive {
    return usePolygon({...config, sides: 7})
}

import type { MaybeRefOrGetter } from '@vueuse/shared'
import { Primitive, PrimitiveConfig, usePrimitive } from "../usePrimitive";
import {useCircle} from "../useCircle";
import {computed, toValue} from "vue";

interface EllipseConfig extends Omit<PrimitiveConfig, 'vertices' | 'edges' | 'faces' | 'isClosed'> {
    xRadius?: MaybeRefOrGetter<number>
    yRadius?: MaybeRefOrGetter<number>
}

export function useEllipse(config?: EllipseConfig): Primitive {
    // Set default values
    const xRadius = config?.xRadius ?? 100
    const yRadius = config?.yRadius ?? 100

    // Calculate the ratio
    const ratio = computed(() => toValue(xRadius) > 0 ? toValue(yRadius) / toValue(xRadius) : 1)

    // Create a circle (and scale it to the ratio of the ellipse)
    const {vertices, edges, faces} = useCircle({radius: xRadius, scale: {x: 1, y: ratio.value}})

    // Return destructured primitive (plus any additional properties, if applicable)
    return {
        ...usePrimitive({...config, vertices, edges, faces})
    }
}

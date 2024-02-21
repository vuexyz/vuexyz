import type {MaybeRefOrGetter} from '@vueuse/shared'
import {computed, ComputedRef, toValue} from 'vue'
import {Primitive, PrimitiveConfig, usePrimitive} from "../usePrimitive";
import {CurveSegment, Edge, Face, Vertex} from "../../types";

interface CircleConfig extends Omit<PrimitiveConfig, 'vertices' | 'edges' | 'faces' | 'isClosed'> {
    radius?: MaybeRefOrGetter<number>
}

/**
 * Composable for working with circles.
 *
 * @see https://vuexyz.org/primitives/usecircle
 * @param config - Configuration object for the circle
 */
interface CircleConfig extends Omit<PrimitiveConfig, 'vertices' | 'edges' | 'faces' | 'isClosed'> {
    radius?: MaybeRefOrGetter<number>
}

export function useCircle(config?: CircleConfig): Primitive {

    // Set default values
    const radius = config?.radius ?? 100;

    const getPointOnCircle = (angle: number) => ({
        x: toValue(radius) * Math.cos(angle),
        y: toValue(radius) * Math.sin(angle),
    });

    // Define vertices
    const vertices: ComputedRef<Vertex[]> = computed(() => [])

    // Define edges
    const edges: ComputedRef<Edge[]> = computed(() => {
        const segments: CurveSegment[] = [];
        const angles = [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2];
        const controlDistance = toValue(radius) * (4 * (Math.sqrt(2) - 1) / 3);
        for (let i = 0; i < angles.length; i++) {
            const startAngle = angles[i];
            const endAngle = angles[(i + 1) % angles.length];
            const start = getPointOnCircle(startAngle);
            const end = getPointOnCircle(endAngle);
            const c1 = {
                x: start.x - controlDistance * Math.sin(startAngle),
                y: start.y + controlDistance * Math.cos(startAngle),
            };
            const c2 = {
                x: end.x + controlDistance * Math.sin(endAngle),
                y: end.y - controlDistance * Math.cos(endAngle),
            };
            segments.push({
                type: 'curve',
                start,
                c1,
                c2,
                end,
            } as CurveSegment);
        }
        return [segments];
    });

    // Define faces
    const faces: ComputedRef<Face[]> = computed(() => [])

    // Return destructured primitive (plus any additional properties, if applicable)
    return {
        ...usePrimitive({...config, vertices, edges, faces})
    }
}

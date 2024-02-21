import type {MaybeRefOrGetter} from '@vueuse/shared'
import {computed, ComputedRef, toValue} from 'vue'
import {Primitive, PrimitiveConfig, usePrimitive} from "../usePrimitive";
import {CurveSegment, Edge, Face, Vertex} from "../../types";

interface ArcConfig extends Omit<PrimitiveConfig, 'vertices' | 'edges' | 'faces' | 'isClosed'> {
    radius?: MaybeRefOrGetter<number>,
    startAngle?: MaybeRefOrGetter<number>,
    endAngle?: MaybeRefOrGetter<number>
}

export function useArc(config?: ArcConfig): Primitive {
    const radius = toValue(config?.radius) ?? 100;

    // Convert degrees to radians
    const startAngleInRadians = (toValue(config?.startAngle) ?? 0) * (Math.PI / 180);
    let endAngleInRadians = (toValue(config?.endAngle) ?? 360) * (Math.PI / 180);

    // Always draw clockwise
    if (endAngleInRadians < startAngleInRadians) {
        endAngleInRadians += 2 * Math.PI;
    }

    const getPointOnArc = (angle: number) => ({
        x: toValue(radius) * Math.cos(angle),
        y: toValue(radius) * Math.sin(angle),
    });

    const edges: ComputedRef<Edge[]> = computed(() => {
        const segments: CurveSegment[] = [];
        const controlDistance = toValue(radius) * (4 * (Math.sqrt(2) - 1) / 3);

        // Method to create our curve segments from the arc definition
        const createCurveSegment = (startAngle: number, endAngle: number) => {
            const start = getPointOnArc(startAngle);
            const end = getPointOnArc(endAngle);
            const c1 = {
                x: start.x - controlDistance * Math.sin(startAngle),
                y: start.y + controlDistance * Math.cos(startAngle),
            };
            const c2 = {
                x: end.x + controlDistance * Math.sin(endAngle),
                y: end.y - controlDistance * Math.cos(endAngle),
            };
            return {
                type: 'curve',
                start,
                c1,
                c2,
                end,
            } as CurveSegment;
        };

        // Divide the arc into quarter-circles or less
        let currentAngle = startAngleInRadians;
        while (currentAngle < endAngleInRadians) {
            let segmentEndAngle = Math.min(currentAngle + Math.PI / 2, endAngleInRadians);
            segments.push(createCurveSegment(currentAngle, segmentEndAngle));
            currentAngle += Math.PI / 2;
        }

        return [segments];
    });

    // Vertices and faces are not modified in this use case
    const vertices: ComputedRef<Vertex[]> = computed(() => []);
    const faces: ComputedRef<Face[]> = computed(() => []);

    return {
        ...usePrimitive({...config, vertices, edges, faces, isClosed: false})
    }
}

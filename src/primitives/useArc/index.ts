import type {MaybeRefOrGetter} from '@vueuse/shared'
import {computed, ComputedRef, toValue} from 'vue'
import {Primitive, PrimitiveConfig, usePrimitive} from "../usePrimitive";
import {CurveSegment, Edge, Face, Vertex} from "../../types";
import {Bezier} from "bezier-js"
import {useCircle} from "../useCircle";

interface ArcConfig extends Omit<PrimitiveConfig, 'vertices' | 'edges' | 'faces' | 'isClosed'> {
    radius?: MaybeRefOrGetter<number>,
    startAngle?: MaybeRefOrGetter<number>,
    endAngle?: MaybeRefOrGetter<number>
}

function normalizeAngle(angle) {
    return angle < 0 ? angle + Math.PI * 2 : angle;
}

export function useArc(config?: ArcConfig): Primitive {
    const radius = toValue(config?.radius) ?? 100
    const circlePrimitive = useCircle({radius: config?.radius})
    const startAngleRadians = (((toValue(config?.startAngle) ?? 0) % 360) * Math.PI) / 180
    let endAngleRadians = (((toValue(config?.endAngle) ?? 360) % 360) * Math.PI) / 180

    // Adjust end angle to ensure it is greater than start angle
    if (endAngleRadians < startAngleRadians) {
        endAngleRadians += 2 * Math.PI;
    }

    const edges: ComputedRef<Edge[]> = computed(() => {
        let includedSegments: CurveSegment[] = []

        // Check for full circle scenario
        if ((toValue(config?.startAngle) ?? 0) % 360 === 0 && (toValue(config?.endAngle) ?? 360) % 360 === 0) {
            // If start is 0 and end is 360 (or equivalent), include all segments as-is
            return [circlePrimitive.edges.value[0].map(segment => ({...segment}))]
        }

        if((toValue(config?.startAngle) ?? 0) % 360 === (toValue(config?.endAngle) ?? 360) % 360) {
            // If start and end angles are the same, include nothing
            return [[]]
        }
        const startQuadrant = Math.floor(startAngleRadians / (Math.PI / 2))
        const endQuadrant = Math.floor(endAngleRadians / (Math.PI / 2))
        circlePrimitive.edges.value[0].forEach((segment: CurveSegment, index) => {
            if (index >= startQuadrant && index <= endQuadrant) {
                if (index > startQuadrant && index < endQuadrant) {
                    includedSegments.push(segment)
                } else {
                    const bezier = new Bezier(segment.start, segment.c1, segment.c2, segment.end)
                    let t0 = 0, t1 = 1
                    if (index === startQuadrant) {
                        t0 = bezier.project({x: radius * Math.cos(startAngleRadians), y: radius * Math.sin(startAngleRadians)}).t
                    }
                    if (index === endQuadrant) {
                        t1 = bezier.project({x: radius * Math.cos(endAngleRadians), y: radius * Math.sin(endAngleRadians)}).t
                    }
                    if (startQuadrant === endQuadrant && t0 > t1) {
                        [t0, t1] = [t1, t0]
                    }
                    if (t0 < t1) {
                        let {points} = bezier.split(t0, t1);
                        includedSegments.push({
                            type: 'curve',
                            start: points[0],
                            c1: points[1],
                            c2: points[2],
                            end: points[3],
                        } as CurveSegment)
                    }
                }
            }
        });
        return [includedSegments]
    });

    const vertices: ComputedRef<Vertex[]> = computed(() => [])
    const faces: ComputedRef<Face[]> = computed(() => [])

    return {
        ...usePrimitive({...config, vertices, edges, faces, isClosed: false})
    };
}

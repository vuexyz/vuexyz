import {MaybeRefOrGetter, toValue} from '@vueuse/shared'
import {computed, ComputedRef, ref, Ref} from 'vue'
import type {Edge, Face, Vertex} from './types'

/**
 * All those automagically reactive details about the shape you're working with.
 */
export interface Primitive {
    vertices: ComputedRef<Vertex[]>
    edges: ComputedRef<Edge[]>
    faces: ComputedRef<Face[]>
    svgPath: ComputedRef<string>
}

/**
 * Common configuration options for primitives.
 */
export interface PrimitiveConfig {
    center?: MaybeRefOrGetter<{ x: number; y: number, z?: number }>
    rotation?: MaybeRefOrGetter<number>,
    vertices: ComputedRef<Vertex[]>,
    edges: ComputedRef<Edge[]>,
    faces: ComputedRef<Face[]>,
    isClosed?: boolean
}

/**
 * The core functionality of a primitive, used by all shapes.
 * @param config
 */
export function usePrimitive(config?: PrimitiveConfig): Primitive {

    // Configuration Defaults
    const inputVertices: Ref<Vertex[]> = ref(config.vertices || []);
    const inputEdges: Ref<Edge[]> = ref(config.edges || []);
    const inputFaces: Ref<Face[]> = ref(config.faces || []);
    const center = config?.center ?? {
        x: 0,
        y: 0,
        z: 0
    }
    const rotation = config?.rotation ?? 0
    const isClosed = config?.isClosed ?? true

    /**
     * The vertices of the primitive, offset from the center.
     */
    const vertices: ComputedRef<Vertex[]> = computed(() => {
        return inputVertices.value.map((vertex) => {
            return {
                ...vertex,
                x: vertex.x + toValue(center).x,
                y: vertex.y + toValue(center).y,
                z: vertex.z + toValue(center).z
            }
        })
    })

    /**
     * The edges of the primitive, offset from the center.
     */
    const edges: ComputedRef<Edge[]> = computed(() => {
        return inputEdges.value.map((edge) => {
            return edge.map((segment) => {
                if (segment.type === 'line') {
                    return {
                        type: 'line',
                        start: {
                            x: segment.start.x + toValue(center).x,
                            y: segment.start.y + toValue(center).y,
                            z: segment.start.z + toValue(center).z
                        },
                        end: {
                            x: segment.end.x + toValue(center).x,
                            y: segment.end.y + toValue(center).y,
                            z: segment.end.z + toValue(center).z
                        }
                    }
                } else {
                    return {
                        type: 'curve',
                        start: {
                            x: segment.start.x + toValue(center).x,
                            y: segment.start.y + toValue(center).y,
                            z: segment.start.z + toValue(center).z
                        },
                        c1: {
                            x: segment.c1.x + toValue(center).x,
                            y: segment.c1.y + toValue(center).y,
                            z: segment.c1.z + toValue(center).z
                        },
                        c2: {
                            x: segment.c2.x + toValue(center).x,
                            y: segment.c2.y + toValue(center).y,
                            z: segment.c2.z + toValue(center).z
                        },
                        end: {
                            x: segment.end.x + toValue(center).x,
                            y: segment.end.y + toValue(center).y,
                            z: segment.end.z + toValue(center).z
                        }
                    }
                }
            })
        })
    })

    // TODO: Apply offset and rotation to all faces
    const faces: ComputedRef<Face[]> = computed(() => {
        return inputFaces.value
    })

    /**
     * Returns the SVG path for the primitive.
     */
    const svgPath = computed(() => {
        let path = '';
        if (edges.value.length > 0) {
            path += `M ${edges.value[0][0].start.x},${edges.value[0][0].start.y} `;
            edges.value.forEach((edge, index) => {
                edge.forEach((segment, segmentIndex) => {
                    if (segment.type === 'line') {
                        path += `L ${segment.end.x},${segment.end.y} `;
                    } else if (segment.type === 'curve') {
                        path += `C ${segment.c1.x},${segment.c1.y} ${segment.c2.x},${segment.c2.y} ${segment.end.x},${segment.end.y} `;
                    }
                });
            });
        }
        if (isClosed) {
            path += 'Z';
        }
        return path.trim();
    });

    return {
        vertices,
        edges,
        faces,
        svgPath
    }
}

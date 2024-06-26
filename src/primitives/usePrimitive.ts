import {MaybeRefOrGetter, toValue} from '@vueuse/shared'
import {computed, ComputedRef, ref, Ref} from 'vue'
import type {BoundingBox, Edge, Face, Vertex} from '../types'
import {Shape, CurvePath, Vector3, LineCurve3, CubicBezierCurve3} from 'three'

/**
 * All those automagically reactive details about the shape you're working with.
 */
export interface Primitive {
    vertices: ComputedRef<Vertex[]>
    edges: ComputedRef<Edge[]>
    faces: ComputedRef<Face[]>
    svgPath: ComputedRef<string>
    drawOnCanvas: (ctx: CanvasRenderingContext2D) => void
    threeShape: ComputedRef<Shape>
    threeCurvePath: ComputedRef<CurvePath<any>>
    centroid: ComputedRef<Vertex>
    boundingBox: ComputedRef<BoundingBox>
}

/**
 * Common configuration options for primitives.
 */
export interface PrimitiveConfig {
    position?: MaybeRefOrGetter<{ x: number; y: number, z?: number }>
    rotation?: MaybeRefOrGetter<number>,
    scale?: MaybeRefOrGetter<number> | MaybeRefOrGetter<Vertex>
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
    const position = config?.position ?? {
        x: 0,
        y: 0,
        z: 0
    }
    const rotation = config?.rotation ?? 0
    const scale = config?.scale ?? 1
    const isClosed = config?.isClosed ?? true

    /**
     * Takes an input vertex and applies the base position offset, rotation, and scale to it.
     */
    function transformVertex(vertex: Vertex): Vertex {
        let newVertex: Vertex = {
            x: (vertex.x ?? 0) + toValue(position).x,
            y: (vertex.y ?? 0) + toValue(position).y,
            z: (vertex.z ?? 0) + toValue(position).z
        };
        const radians = toValue(rotation) * (Math.PI / 180)
        newVertex = {
            x: Math.cos(radians) * (newVertex.x - toValue(position).x) - Math.sin(radians) * (newVertex.y - toValue(position).y) + toValue(position).x,
            y: Math.sin(radians) * (newVertex.x - toValue(position).x) + Math.cos(radians) * (newVertex.y - toValue(position).y) + toValue(position).y,
            z: newVertex.z
        };
        const scaleValue = toValue(scale);
        if (typeof scaleValue === 'object' && scaleValue.x !== undefined && scaleValue.y !== undefined) {
            newVertex = {
                x: +(toValue(position).x + (newVertex.x - toValue(position).x) * scaleValue.x).toFixed(3),
                y: +(toValue(position).y + (newVertex.y - toValue(position).y) * scaleValue.y).toFixed(3),
                z: newVertex.z
            };
        } else if (typeof scaleValue === 'number') {
            newVertex = {
                x: +(toValue(position).x + (newVertex.x - toValue(position).x) * scaleValue).toFixed(3),
                y: +(toValue(position).y + (newVertex.y - toValue(position).y) * scaleValue).toFixed(3),
                z: newVertex.z
            };
        }
        return newVertex;
    }

    /**
     * The transformed vertices.
     */
    const vertices: ComputedRef<Vertex[]> = computed(() => {
        return inputVertices.value.map(vertex => transformVertex(vertex));
    })

    /**
     * The transformed edges.
     */
    const edges: ComputedRef<Edge[]> = computed(() => {
        return inputEdges.value.map(edge => edge.map(segment => ({
            ...segment,
            start: transformVertex(segment.start),
            end: transformVertex(segment.end),
            ...(segment.type === 'curve' && {
                c1: transformVertex(segment.c1),
                c2: transformVertex(segment.c2),
            }),
        })));
    });

    /**
     * The transformed faces.
     */
    const faces: ComputedRef<Face[]> = computed(() => {
        return inputFaces.value.map(face => face.map(edge => edge.map(segment => {
            if (segment.type === 'line') {
                return {
                    type: 'line',
                    start: transformVertex(segment.start),
                    end: transformVertex(segment.end),
                };
            } else {
                return {
                    type: 'curve',
                    start: transformVertex(segment.start),
                    c1: transformVertex(segment.c1),
                    c2: transformVertex(segment.c2),
                    end: transformVertex(segment.end),
                };
            }
        })));
    });


    /**
     * Returns the SVG path for the primitive.
     */
    const svgPath = computed(() => {
        let path = '';
        if (edges.value.length > 0) {
            path += `M ${edges.value[0][0].start.x},${edges.value[0][0].start.y} `;
            edges.value.forEach((edge) => {
                edge.forEach((segment) => {
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

    /**
     * Draws the primitive on a canvas context.
     * @param ctx - The canvas context to draw on.
     */
    const drawOnCanvas = (ctx: CanvasRenderingContext2D) => {
        if (edges.value.length > 0) {
            // Begin the path
            ctx.beginPath();
            ctx.moveTo(edges.value[0][0].start.x, edges.value[0][0].start.y);
            edges.value.forEach((edge) => {
                edge.forEach((segment) => {
                    if (segment.type === 'line') {
                        ctx.lineTo(segment.end.x, segment.end.y);
                    } else if (segment.type === 'curve') {
                        ctx.bezierCurveTo(segment.c1.x, segment.c1.y, segment.c2.x, segment.c2.y, segment.end.x, segment.end.y);
                    }
                });
            });
            if (isClosed) {
                ctx.closePath();
            }
        }
    }

    /**
     * Returns a THREE.js shape object for the primitive.
     */
    const threeShape = computed(() => {
        const shape: Shape = new Shape()
        if (edges.value.length > 0 && isClosed) {
            shape.moveTo(edges.value[0][0].start.x, edges.value[0][0].start.y)
            edges.value.forEach(edge => {
                edge.forEach(segment => {
                    if (segment.type === 'line') {
                        shape.lineTo(segment.end.x, segment.end.y)
                    } else if (segment.type === 'curve') {
                        shape.bezierCurveTo(segment.c1.x, segment.c1.y, segment.c2.x, segment.c2.y, segment.end.x, segment.end.y)
                    }
                })
            })
            shape.closePath()
        }
        return shape
    })

    /**
     * Returns a THREE.js curve path object for the primitive.
     */
    const threeCurvePath = computed(() => {
        const curvePath = new CurvePath();
        if (edges.value.length > 0) {
            let firstPoint = new Vector3(edges.value[0][0].start.x, edges.value[0][0].start.y, 0);
            let currentPoint = firstPoint.clone();
            edges.value.forEach(edge => {
                edge.forEach(segment => {
                    if (segment.type === 'line') {
                        const line = new LineCurve3(
                            currentPoint,
                            new Vector3(segment.end.x, segment.end.y, 0)
                        )
                        curvePath.add(line)
                        currentPoint = line.v2.clone()
                    } else if (segment.type === 'curve') {
                        const curve = new CubicBezierCurve3(
                            currentPoint,
                            new Vector3(segment.c1.x, segment.c1.y, 0),
                            new Vector3(segment.c2.x, segment.c2.y, 0),
                            new Vector3(segment.end.x, segment.end.y, 0)
                        );
                        curvePath.add(curve)
                        currentPoint = curve.v3.clone()
                    }
                })
            })
            if (isClosed) {
                const closingLine = new LineCurve3(currentPoint, firstPoint)
                curvePath.add(closingLine)
            }
        }
        return curvePath
    })

    /**
     * The centroid (geometric center) of the primitive.
     */
    const centroid = computed(() => {
        return vertices.value.reduce((acc, v) => ({
            x: acc.x + v.x / vertices.value.length,
            y: acc.y + v.y / vertices.value.length,
            z: acc.z + v.z / vertices.value.length
        }), {x: 0, y: 0});
    })

    /**
     * The bounding box of the primitive.
     */
    const boundingBox: ComputedRef<BoundingBox> = computed(() => {
        if (edges.value.length === 0) return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            maxX: 0,
            maxY: 0
        };
        let minX = edges.value[0][0].start.x;
        let minY = edges.value[0][0].start.y;
        let maxX = edges.value[0][0].start.x;
        let maxY = edges.value[0][0].start.y;
        edges.value.forEach(edge => {
            edge.forEach(segment => {
                const points = [segment.start, segment.end];
                if (segment.type === 'curve') {
                    points.push(segment.c1, segment.c2);
                }
                points.forEach(point => {
                    if (point.x < minX) minX = point.x;
                    if (point.x > maxX) maxX = point.x;
                    if (point.y < minY) minY = point.y;
                    if (point.y > maxY) maxY = point.y;
                });
            });
        });
        const width = maxX - minX;
        const height = maxY - minY;
        return {
            x: +minX.toFixed(5),
            y: +minY.toFixed(5),
            width: +width.toFixed(5),
            height: +height.toFixed(5),
            maxX: +maxX.toFixed(5),
            maxY: +maxY.toFixed(5)
        };
    });

    return {
        vertices,
        edges,
        faces,
        svgPath,
        drawOnCanvas,
        threeShape,
        threeCurvePath,
        centroid,
        boundingBox
    }
}

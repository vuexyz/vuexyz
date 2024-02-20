/**
 * A single point in 2D or 3D space.
 */
export interface Vertex {
    x: number
    y: number
    z?: number
}

/**
 * A line segment connecting two points in 2D or 3D space (vertices).
 */
export interface LineSegment {
    type: 'line';
    start: Vertex;
    end: Vertex;
}

/**
 * A curve segment connecting two points in 2D or 3D space (vertices).
 */
export interface CurveSegment {
    type: 'curve';
    start: Vertex;
    c1: Vertex;
    c2: Vertex;
    end: Vertex;
}

/**
 * A single segment of an edge, either a line segment or a curve segment.
 */
export type EdgeSegment = LineSegment | CurveSegment;

/**
 * An edge connecting two points in 2D or 3D space, comprised of one or more line and/or curve segments.
 */
export type Edge = EdgeSegment[];

/**
 * Multiple edges combine to form a face.
 */
export type Face = Edge[];

/**
 * A bounding box in 2D space, with the top-left corner as the origin.
 */
export interface BoundingBox {
    x: number,
    y: number,
    width: number,
    height: number,
    maxX: number,
    maxY: number
}

/**
 * Provides for TS omit over union types.
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any
    ? Omit<T, K>
    : never;

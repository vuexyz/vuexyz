import type { MaybeRefOrGetter } from '@vueuse/shared'

/**
 * A single point in 2D or 3D space.
 */
export interface Vertex {
  x: number
  y: number
  z?: number
}

/**
 * An edge connecting two points in 2D or 3D space (vertices).
 */
export interface Edge {
  from: Vertex
  to: Vertex
}

/**
 * Common configuration options for primitives.
 */
export interface PrimitiveConfig {
  center?: MaybeRefOrGetter<{ x: number; y: number, z?: number }>
  rotation?: MaybeRefOrGetter<number>
}

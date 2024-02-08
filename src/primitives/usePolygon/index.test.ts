import { describe, expect, it } from 'vitest'
import { usePolygon } from '.'

describe('usePolygon', () => {
  it('should be defined', () => {
    expect(usePolygon).toBeDefined()
  })

  it('should generate five vertices', () => {
    const polygon = usePolygon({ sides: 5, sideLength: 50})
    expect(polygon.vertices.value.length).toBe(5)
  })

  it('should generate five edges', () => {
    const polygon = usePolygon({ sides: 5, sideLength: 50})
    expect(polygon.edges.value.length).toBe(5)
  })

  it('should generate one face', () => {
    const polygon = usePolygon({ sides: 5, sideLength: 50})
    expect(polygon.faces.value.length).toBe(1)
  })
})

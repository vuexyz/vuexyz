import { describe, expect, it } from 'vitest'
import { usePentagon } from '.'

describe('usePentagon', () => {
  it('should be defined', () => {
    expect(usePentagon).toBeDefined()
  })

  it('should generate five vertices', () => {
    const pentagon = usePentagon({ sideLength: 50 })
    expect(pentagon.vertices.value.length).toBe(5)
  })

  it('should generate five edges', () => {
    const pentagon = usePentagon({ sideLength: 50 })
    expect(pentagon.edges.value.length).toBe(5)
  })

  it('should generate one face', () => {
    const pentagon = usePentagon({ sideLength: 50 })
    expect(pentagon.faces.value.length).toBe(1)
  })
})

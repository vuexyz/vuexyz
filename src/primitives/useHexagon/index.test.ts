import { describe, expect, it } from 'vitest'
import { useHexagon } from '.'

describe('useHexagon', () => {
  it('should be defined', () => {
    expect(useHexagon).toBeDefined()
  })

  it('should generate six vertices', () => {
    const hexagon = useHexagon({ sideLength: 50 })
    expect(hexagon.vertices.value.length).toBe(6)
  })

  it('should generate six edges', () => {
    const hexagon = useHexagon({ sideLength: 50 })
    expect(hexagon.edges.value.length).toBe(6)
  })

  it('should generate one face', () => {
    const hexagon = useHexagon({ sideLength: 50 })
    expect(hexagon.faces.value.length).toBe(1)
  })
})

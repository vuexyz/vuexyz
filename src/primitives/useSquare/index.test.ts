import { describe, expect, it } from 'vitest'
import { useSquare } from '.'

describe('useSquare', () => {
  it('should be defined', () => {
    expect(useSquare).toBeDefined()
  })

  it('should generate four vertices', () => {
    const square = useSquare({ sideLength: 50 })
    expect(square.vertices.value.length).toBe(4)
  })

  it('should generate four edges', () => {
    const square = useSquare({ sideLength: 50 })
    expect(square.edges.value.length).toBe(4)
  })

  it('should generate one face', () => {
    const square = useSquare({ sideLength: 50 })
    expect(square.faces.value.length).toBe(1)
  })
})

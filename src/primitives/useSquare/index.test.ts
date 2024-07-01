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

  it('should have a 50 units wide bounding box', () => {
    const square = useSquare({ sideLength: 50 })
    expect(square.boundingBox.value.width).toBe(50)
  })

  it('all z values should be 0, not NaN', () => {
    const square = useSquare({ sideLength: 50 })
    expect(square.vertices.value[0].z).toBe(0)
    expect(square.faces.value[0][0][0].start.z).toBe(0)
  })
})

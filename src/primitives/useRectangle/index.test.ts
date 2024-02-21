import { describe, expect, it } from 'vitest'
import { useRectangle } from '.'

describe('useRectangle', () => {
  it('should be defined', () => {
    expect(useRectangle).toBeDefined()
  })

  it('should generate 4 vertices', () => {
    const rectangle = useRectangle({ width: 100, height: 50 })
    expect(rectangle.vertices.value.length).toBe(4)
  })

  it('should generate four edges', () => {
    const rectangle = useRectangle({ width: 100, height: 50 })
    expect(rectangle.edges.value.length).toBe(4)
  })

  it('should generate one face', () => {
    const rectangle = useRectangle({ width: 100, height: 50 })
    expect(rectangle.faces.value.length).toBe(1)
  })

  it('should have a 100 units wide, 50 units tall bounding box', () => {
    const rectangle = useRectangle({ width: 100, height: 50 })
    expect(rectangle.boundingBox.value.width).toBe(100)
    expect(rectangle.boundingBox.value.height).toBe(50)
  })
})

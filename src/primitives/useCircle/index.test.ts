import { describe, expect, it } from 'vitest'
import { useCircle } from '.'

describe('useCircle', () => {
  it('should be defined', () => {
    expect(useCircle).toBeDefined()
  })

  it('should generate zero vertices', () => {
    const circle = useCircle({ radius: 50 })
    expect(circle.vertices.value.length).toBe(0)
  })

  it('should generate 1 edge', () => {
    const circle = useCircle({ radius: 50 })
    expect(circle.edges.value.length).toBe(1)
  })

  it('should generate 1 face', () => {
    const circle = useCircle({ radius: 50 })
    expect(circle.faces.value.length).toBe(0)
  })

  it('should have a 100 units wide bounding box', () => {
    const circle = useCircle({ radius: 50 })
    expect(circle.boundingBox.value.width).toBe(100)
  })
})

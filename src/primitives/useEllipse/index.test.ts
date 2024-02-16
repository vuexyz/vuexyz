import { describe, expect, it } from 'vitest'
import { useEllipse } from '.'

describe('useEllipse', () => {
  it('should be defined', () => {
    expect(useEllipse).toBeDefined()
  })

  it('should generate zero vertices', () => {
    const ellipse = useEllipse({ xRadius: 100, yRadius: 50 })
    expect(ellipse.vertices.value.length).toBe(0)
  })

  it('should generate 1 edge', () => {
    const ellipse = useEllipse({ xRadius: 100, yRadius: 50 })
    expect(ellipse.edges.value.length).toBe(1)
  })

  it('should generate 1 face', () => {
    const ellipse = useEllipse({ xRadius: 100, yRadius: 50 })
    expect(ellipse.faces.value.length).toBe(0)
  })

  it('should have a 100 units wide bounding box', () => {
    const ellipse = useEllipse({ xRadius: 100, yRadius: 50 })
    expect(ellipse.boundingBox.value.width).toBe(200)
  })
})

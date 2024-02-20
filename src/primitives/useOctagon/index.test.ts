import { describe, expect, it } from 'vitest'
import { useOctagon } from '.'

describe('useOctagon', () => {
  it('should be defined', () => {
    expect(useOctagon).toBeDefined()
  })

  it('should generate eight vertices', () => {
    const octagon = useOctagon({ sideLength: 50 })
    expect(octagon.vertices.value.length).toBe(8)
  })

  it('should generate eight edges', () => {
    const octagon = useOctagon({ sideLength: 50 })
    expect(octagon.edges.value.length).toBe(8)
  })

  it('should generate one face', () => {
    const octagon = useOctagon({ sideLength: 50 })
    expect(octagon.faces.value.length).toBe(1)
  })
})

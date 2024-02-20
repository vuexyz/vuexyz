import { describe, expect, it } from 'vitest'
import { useHeptagon } from '.'

describe('useHeptagon', () => {
  it('should be defined', () => {
    expect(useHeptagon).toBeDefined()
  })

  it('should generate seven vertices', () => {
    const heptagon = useHeptagon({ sideLength: 50 })
    expect(heptagon.vertices.value.length).toBe(7)
  })

  it('should generate seven edges', () => {
    const heptagon = useHeptagon({ sideLength: 50 })
    expect(heptagon.edges.value.length).toBe(7)
  })

  it('should generate one face', () => {
    const heptagon = useHeptagon({ sideLength: 50 })
    expect(heptagon.faces.value.length).toBe(1)
  })
})

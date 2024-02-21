import { describe, expect, it } from 'vitest'
import { useArc } from '.'

describe('useArc', () => {
  it('should be defined', () => {
    expect(useArc).toBeDefined()
  })

  it('should generate zero vertices', () => {
    const arc = useArc({ radius: 50 })
    expect(arc.vertices.value.length).toBe(0)
  })

  it('should generate 1 edge', () => {
    const arc = useArc({ radius: 50 })
    expect(arc.edges.value.length).toBe(1)
  })

  it('should generate 1 face', () => {
    const arc = useArc({ radius: 50 })
    expect(arc.faces.value.length).toBe(0)
  })
})

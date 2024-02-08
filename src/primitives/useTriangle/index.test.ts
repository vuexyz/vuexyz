import { describe, expect, it } from 'vitest'
import { useTriangle } from '.'

describe('useTriangle', () => {
  it('should be defined', () => {
    expect(useTriangle).toBeDefined()
  })

  it('should generate three vertices', () => {
    const triangle = useTriangle({ base: 50, height: 50 })
    expect(triangle.vertices.value.length).toBe(3)
  })

  it('should generate three edges', () => {
    const triangle = useTriangle({ base: 50, height: 50 })
    expect(triangle.edges.value.length).toBe(3)
  })

  it('should generate one face', () => {
    const triangle = useTriangle({ base: 50, height: 50 })
    expect(triangle.faces.value.length).toBe(1)
  })
})

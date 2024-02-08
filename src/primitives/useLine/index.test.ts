import { ref } from 'vue'
import { describe, expect, it } from 'vitest'
import { useLine } from '.'

describe('useLine', () => {
  it('should be defined', () => {
    expect(useLine).toBeDefined()
  })

  it('should generate 2 vertices', () => {
    const line = useLine({ vertices: [{ x: 0, y: 0 }, { x: 50, y: 50 }] })
    expect(line.vertices.value.length).toBe(2)
  })

  it('should generate one edge', () => {
    const line = useLine({ vertices: [{ x: 0, y: 0 }, { x: 50, y: 50 }] })
    expect(line.edges.value.length).toBe(1)
  })

  it('should generate no faces', () => {
    const line = useLine({ vertices: [{ x: 0, y: 0 }, { x: 50, y: 50 }] })
    expect(line.faces.value.length).toBe(0)
  })
})

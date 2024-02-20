import { describe, expect, it } from 'vitest'
import { useBezierCurve } from '.'

describe('useBezierCurve', () => {
  it('should be defined', () => {
    expect(useBezierCurve).toBeDefined()
  })

  it('should generate 2 vertices', () => {
    const bezierCurve = useBezierCurve({ start: { x: 0, y: 0 }, c1: { x: 25, y: 25 }, c2: { x: 25, y: 60 }, end: { x: 50, y: 50 }})
    expect(bezierCurve.vertices.value.length).toBe(2)
  })

  it('should generate one edge', () => {
    const bezierCurve = useBezierCurve({ start: { x: 0, y: 0 }, c1: { x: 25, y: 25 }, c2: { x: 25, y: 60 }, end: { x: 50, y: 50 }})
    expect(bezierCurve.edges.value.length).toBe(1)
  })

  it('should generate no faces', () => {
    const bezierCurve = useBezierCurve({ start: { x: 0, y: 0 }, c1: { x: 25, y: 25 }, c2: { x: 25, y: 60 }, end: { x: 50, y: 50 }})
    expect(bezierCurve.faces.value.length).toBe(0)
  })
})

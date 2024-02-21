import { describe, expect, it } from 'vitest'
import {usePointOnEdge} from "./index";
import {useSquare} from "../../primitives/useSquare";
import {useCircle} from "../../primitives/useCircle";

describe('usePointOnEdge', () => {
  it('should be defined', () => {
    expect(usePointOnEdge).toBeDefined()
  })

  it('should generate correct point on a square\'s first edge at 0%', () => {
    const square = useSquare({sideLength: 100})
    const output = usePointOnEdge(square.edges.value[0], 0)
    expect(output.value).toStrictEqual({ x: 50, y: -50, z: 0 })
  })

  it('should generate correct point on a square\'s first edge at 50%', () => {
    const square = useSquare({sideLength: 100})
    const output = usePointOnEdge(square.edges.value[0], 0.5)
    expect(output.value).toStrictEqual({ x: 50, y: 0, z: 0 })
  })

  it('should generate correct point on a square\'s first edge at 100%', () => {
    const square = useSquare({sideLength: 100})
    const output = usePointOnEdge(square.edges.value[0], 1)
    expect(output.value).toStrictEqual({ x: 50, y: 50, z: 0 })
  })

  it('should generate correct point on a circle\'s edge at 0%', () => {
    const circle = useCircle({radius: 50})
    const output = usePointOnEdge(circle.edges.value[0], 0)
    expect(output.value).toStrictEqual({ x: 50, y: 0, z: 0 })
  })

  it('should generate correct point on a circle\'s edge at 50%', () => {
    const circle = useCircle({radius: 50})
    const output = usePointOnEdge(circle.edges.value[0], 0.5)
    expect(output.value).toStrictEqual({ x: -50, y: 0, z: 0 })
  })

  it('should generate correct point on a circle\'s edge at 25%', () => {
    const circle = useCircle({radius: 50})
    const output = usePointOnEdge(circle.edges.value[0], 0.25)
    expect(output.value).toStrictEqual({ x: 0, y: 50, z: 0 })
  })
})

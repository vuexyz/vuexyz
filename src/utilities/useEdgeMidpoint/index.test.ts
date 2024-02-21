import { describe, expect, it } from 'vitest'
import {useEdgeMidpoint} from "./index";
import {useSquare} from "../../primitives/useSquare";
import {usePointOnEdge} from "../usePointOnEdge";

describe('useEdgeMidpoint', () => {
  it('should be defined', () => {
    expect(useEdgeMidpoint).toBeDefined()
  })

  it('should generate correct point for a square\'s first edge midpoint', () => {
    const square = useSquare({sideLength: 100})
    const output = useEdgeMidpoint(square.edges.value[0])
    expect(output.value).toStrictEqual({ x: 50, y: 0, z: 0 })
  })
})

import { describe, expect, it } from 'vitest'
import {usePointOnPrimitive} from "./index";
import {useSquare} from "../../primitives/useSquare";

describe('usePointOnPrimitive', () => {
  it('should be defined', () => {
    expect(usePointOnPrimitive).toBeDefined()
  })

  it('should generate correct point on a square\'s total edge at 40%', () => {
    const square = useSquare({sideLength: 100})
    const output = usePointOnPrimitive(square, 0.4)
    expect(output.value).toStrictEqual({ x: -10, y: 50, z: 0 })
  })
})

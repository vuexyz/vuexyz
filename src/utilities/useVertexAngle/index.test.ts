import { describe, expect, it } from 'vitest'
import {useVertexAngle} from "./index";
import {useSquare} from "../../primitives/useSquare";
import {usePointOnEdge} from "../usePointOnEdge";
import {ref} from "vue";

describe('useVertexAngle', () => {
  it('should be defined', () => {
    expect(useVertexAngle).toBeDefined()
  })

  it('should generate correct angle and distance', () => {
    const start = ref({ x: 0, y: 0, z: 0 })
    const end = ref({ x: 100, y: 100, z: 0 })
    const {angle, distance} = useVertexAngle(start, end)
    expect(angle.value).toStrictEqual(45)
    expect(distance.value).toStrictEqual(141.4213562373095)
  })
})

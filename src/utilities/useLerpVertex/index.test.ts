import { describe, expect, it } from 'vitest'
import {useLerpVertex} from "./index";

describe('useLerpVertex', () => {
  it('should be defined', () => {
    expect(useLerpVertex).toBeDefined()
  })

  it('should generate a correctly interpolated vertex at 50%', () => {
    const output = useLerpVertex({ x: 100, y: 100, z: 0 }, { x: 300, y: 300, z: 0 }, 0.5)
    expect(output.value).toStrictEqual({x: 200, y: 200, z: 0})
  })

  it('should generate a correctly interpolated vertex at 25%', () => {
    const output = useLerpVertex({ x: 100, y: 100, z: 0 }, { x: 300, y: 300, z: 100 }, 0.25)
    expect(output.value).toStrictEqual({x: 150, y: 150, z: 25})
  })
})

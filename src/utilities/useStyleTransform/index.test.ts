import { describe, expect, it } from 'vitest'
import {useStyleTransform} from "./index";

describe('useStyleTransform', () => {
  it('should be defined', () => {
    expect(useStyleTransform).toBeDefined()
  })

  it('should generate a correct style string', () => {
    const style = useStyleTransform({ x: 100, y: 200, z: 0 })
    expect(style.value).toBe('position: absolute; top: 0; left: 0; transform: translate3d(100px, 200px, 0px)')
  })
})

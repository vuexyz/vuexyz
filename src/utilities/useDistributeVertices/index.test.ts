import {describe, expect, it} from 'vitest'
import {useDistributeVertices} from "./index";
import {useSquare} from "../../primitives/useSquare";

describe('useDistributeVertices', () => {
    it('should be defined', () => {
        expect(useDistributeVertices).toBeDefined()
    })

    it('it should return 4 vertices if prompted to layout 4 along a square', () => {
      const square = useSquare({sideLength: 100})
      const output = useDistributeVertices(square, 4)
      expect(output.value.length).toStrictEqual(4)
    })
})

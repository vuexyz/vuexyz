import {describe, expect, it} from 'vitest'
import {useDistributePoints} from "./index";
import {useSquare} from "../../primitives/useSquare";

describe('useDistributePoints', () => {
    it('should be defined', () => {
        expect(useDistributePoints).toBeDefined()
    })

    it('it should return 4 vertices if prompted to layout 4 along a square', () => {
        const square = useSquare({sideLength: 100})
        const {vertices, percentages} = useDistributePoints(square, 4)
        expect(vertices.value.length).toStrictEqual(4)
        expect(percentages.value.length).toStrictEqual(4)
    })
})

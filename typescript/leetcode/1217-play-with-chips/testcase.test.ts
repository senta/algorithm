import { minCostToMoveChips as solution01 } from "./solution01"

type ArgType = [number[]]
const solutions = [solution01]

test("case 1", () => {
  const args: ArgType = [[1, 2, 3]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(1)
  }
})

test("case 2", () => {
  const args: ArgType = [[2, 2, 2, 3, 3]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(2)
  }
})

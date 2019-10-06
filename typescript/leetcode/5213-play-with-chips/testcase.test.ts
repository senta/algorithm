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
    expect(solution01.apply(null, args)).toEqual(2)
  }
})

test("case 5", () => {
  const args: ArgType = [new Array(30).fill(null).map((_, i) => i)]

  for (let i = 0; i < solutions.length; i++) {
    expect(solution01.apply(null, args)).toEqual(15)
  }
})

test.skip("case 6", () => {
  const args: ArgType = [[1, 2, 2, 2, 2]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solution01.apply(null, args)).toEqual(1)
  }
})

import { minCostClimbingStairs as solution01 } from "./solution01"

type Input = [number[]]
const solutions = [solution01]

test("case 1", () => {
  const args: Input = [[10, 15, 20]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(15)
  }
})

test("case 2", () => {
  const args: Input = [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(6)
  }
})

test("case 3", () => {
  const args: Input = [[0, 2, 2, 1]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(2)
  }
})

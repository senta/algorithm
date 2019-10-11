// import { threeSum as solution01 } from "./solution01"
// import { threeSum as solution02 } from "./solution02"
import { threeSum as solution03 } from "./solution03"

type Input = [number[]]
// const solutions = [solution01, solution02, solution03]
const solutions = [solution03]

function sortResult(result: number[][]): void {
  for (let i = 0; i < result.length; i++) {
    result[i].sort((a, b) => a - b)
  }
  result.sort((a, b) => a[0] - b[0])
}

test("case 1", () => {
  const args: Input = [[-1, 0, 1, 2, -1, -4]]

  for (let i = 0; i < solutions.length; i++) {
    const result = solutions[i].apply(null, args)
    const expected = [[-1, -1, 2], [-1, 0, 1]]
    sortResult(result)
    sortResult(expected)
    expect(result).toEqual(expected)
  }
})

test("case 2", () => {
  const args: Input = [[1, 2, -2, -1]]

  for (let i = 0; i < solutions.length; i++) {
    const result = solutions[i].apply(null, args)
    expect(result).toEqual([])
  }
})

test("case 3", () => {
  const args: Input = [[-1, 0, 1, 2, -1, -4, 0, 0]]

  for (let i = 0; i < solutions.length; i++) {
    const result = solutions[i].apply(null, args)
    const expected = [[-1, -1, 2], [-1, 0, 1], [0, 0, 0]]
    sortResult(result)
    sortResult(expected)
    expect(result).toEqual(expected)
  }
})

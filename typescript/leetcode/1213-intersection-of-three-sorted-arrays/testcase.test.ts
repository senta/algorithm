import { arraysIntersection as solution01 } from "./solution01"
import { arraysIntersection as solution02 } from "./solution02"
import { arraysIntersection as solution03 } from "./solution03"

type ArgType = [number[], number[], number[]]
const solutions = [solution01, solution02, solution03]

test("normal case", () => {
  const args: ArgType = [[1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual([1, 5])
  }
})

test("no match case", () => {
  const args: ArgType = [[0, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 6, 8]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solution01.apply(null, args)).toEqual([])
  }
})

test("max elements (1000)", () => {
  const thousand = new Array(1000).fill(null).map((_, i) => i)
  const args: ArgType = [thousand, thousand, thousand]

  for (let i = 0; i < solutions.length; i++) {
    expect(solution01.apply(null, args)).toEqual(thousand)
  }
})

test("the first numbers has the most elements", () => {
  const args: ArgType = [[0, 2, 3, 4, 5, 9], [9], [1, 9]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solution01.apply(null, args)).toEqual([9])
  }
})

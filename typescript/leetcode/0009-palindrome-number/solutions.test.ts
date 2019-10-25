import { isPalindrome as solution01 } from "./solution01"
import { isPalindrome as solution02 } from "./solution02"

type Input = [number]
const solutions = [solution01, solution02]

test("case 1", () => {
  const args: Input = [121]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(true)
  }
})

test("case 2", () => {
  const args: Input = [-121]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(false)
  }
})

test("case 3", () => {
  const args: Input = [1]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(true)
  }
})

test("case 4", () => {
  const args: Input = [1221]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(true)
  }
})

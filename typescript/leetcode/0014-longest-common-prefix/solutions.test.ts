import { longestCommonPrefix as solution01 } from "./solution01"
import { longestCommonPrefix as solution02 } from "./solution02"

type Input = [string[]]
const solutions = [solution01, solution02]

test("case 1", () => {
  const args: Input = [["flower", "flow", "flight"]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe("fl")
  }
})

test("case 2", () => {
  const args: Input = [["dog", "racecar", "car"]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe("")
  }
})

test("case 3", () => {
  const args: Input = [[]]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe("")
  }
})

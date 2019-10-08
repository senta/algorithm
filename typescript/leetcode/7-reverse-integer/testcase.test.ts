import { reverse as solution01 } from "./solution01"

type ArgType = [number]
const solutions = [solution01]

test("case 1", () => {
  const args: ArgType = [123]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(321)
  }
})

test("case 1", () => {
  const args: ArgType = [-123]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(-321)
  }
})

test("case 2", () => {
  const args: ArgType = [120]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(21)
  }
})

import { myAtoi as solution01 } from "./solution01"

type Input = Parameters<typeof solution01>
type Output = ReturnType<typeof solution01>
type TestCase = [Input, Output]

const testcases: TestCase[] = [
  [["42"], 42],
  [["   -42"], -42],
  [["4193 with words"], 4193],
  [["words and 987"], 0],
  [["-91283472332"], -2147483648],
  [["91283472332"], 2147483647]
]

const solutions = [solution01]

for (let i = 0; i < solutions.length; i++) {

  for (let j = 0; j < testcases.length; j++) {
    const [args, expected] = testcases[j]

    test(`solution: ${i}: case: ${j}`, () => {
      expect(solutions[i].apply(null, args)).toEqual(expected)
    })
  }
}

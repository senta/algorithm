import { convert as solution01 } from "./solution01"

type Input = Parameters<typeof solution01>
type Output = ReturnType<typeof solution01>
type TestCase = [Input, Output]

const testcases: TestCase[] = [
  [["AB", 1], "AB"],
  [["PAYPALISHIRING", 3], "PAHNAPLSIIGYIR"],
  [["PAYPALISHIRING", 4], "PINALSIGYAHRPI"]
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

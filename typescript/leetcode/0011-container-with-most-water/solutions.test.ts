import { maxArea as solution01 } from "./solution01"

type Input = Parameters<typeof solution01>
type Output = ReturnType<typeof solution01>
type TestCase = [Input, Output]

const testcases: TestCase[] = [
  [[[1,8,6,2,5,4,8,3,7],], 49],
  [[[1,8,6,2,5,4,8,3],], 40],
  [[[1,1],], 1],
  [[[0,0],], 0]
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

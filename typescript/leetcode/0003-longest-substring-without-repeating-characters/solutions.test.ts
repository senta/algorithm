import { lengthOfLongestSubstring as solution01 } from "./solution01"

type Input = Parameters<typeof solution01>
type Output = ReturnType<typeof solution01>
type TestCase = [Input, Output]

const testcases: TestCase[] = [
  [["dvdf",], 3],
  [["abcabcbb",], 3],
  [["bbbbb",], 1],
  [["pwwkew",], 3],
  [["",], 0],
  [[" ",], 1],
  [["abcde",], 5],
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

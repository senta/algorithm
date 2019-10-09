import { isMatch as solution01 } from "./solution01"

const solutions = [solution01]

type Input = [string, string]

test("case 1", () => {
  const args: Input = ["aa", "a"]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(false)
  }
})

test("case 2", () => {
  const args: Input = ["aa", "a*"]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(true)
  }
})

test("case 3", () => {
  const args: Input = ["ab", ".*"]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(true)
  }
})

test("case 4", () => {
  const args: Input = ["aab", "c*a*b"]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(true)
  }
})

test("case 5", () => {
  const args: Input = ["mississippi", "mis*is*p*."]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(false)
  }
})

test("case 6", () => {
  const args: Input = ["aaa", "a*a"]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(true)
  }
})

test("case 7", () => {
  const args: Input = ["aaa", "a*aa"]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(true)
  }
})

test("case 8", () => {
  const args: Input = ["mississippi", "mis*is*ip*."]
  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(true)
  }
})

test("case 9", () => {
  const args: Input = ["aaa", "aaaa"]
  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(false)
  }
})

test("case 10", () => {
  const args: Input = ["passsssp", "pas*p"]
  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(true)
  }
})

test("case 11", () => {
  const args: Input = ["", ""]
  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(true)
  }
})

test("case 12", () => {
  const args: Input = ["ab", ".*c"]
  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toBe(false)
  }
})

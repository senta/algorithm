import { decodeString as solution01 } from "./solution01"
import { decodeString as solution02 } from "./solution02"
import { decodeString as solution03 } from "./solution03"

type ArgType = [string]
const solutions = [solution01, solution02, solution03]

test("case 1", () => {
  const args: ArgType = ["3[a]2[bc]"]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual("aaabcbc")
  }
})

test("case 2", () => {
  const args: ArgType = ["3[a2[c]]"]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual("accaccacc")
  }
})

test("case 3", () => {
  const args: ArgType = ["2[abc]3[cd]ef"]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual("abcabccdcdcdef")
  }
})

test("case 4", () => {
  const args: ArgType = ["100[leetcode]"]

  for (let i = 0; i < solutions.length; i++) {
    expect(solutions[i].apply(null, args)).toEqual(
      "leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode"
    )
  }
})

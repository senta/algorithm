import { TreeNode, createTree } from "../lib/Tree"
import { rangeSumBST as solution01 } from "./solution01"
import { rangeSumBST as solution02 } from "./solution02"
import { rangeSumBST as solution03 } from "./solution03"
import { rangeSumBST as solution04 } from "./solution04"
import { rangeSumBST as solution05 } from "./solution04"

const solutions = [solution01, solution02, solution03, solution04, solution05]

type Input = [TreeNode<number>, number, number]

describe("938. Range Sum of BST", () => {
  it("case 1", () => {
    const args: Input = [
      createTree([10, 5, 15, 3, 7, null, 18]) as TreeNode<number>,
      7,
      15
    ]

    for (let i = 0; i < solutions.length; i++) {
      const result = solutions[i].apply(null, args)
      expect(result).toEqual(32)
    }
  })

  it("case 2", () => {
    const args: Input = [
      createTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]) as TreeNode<number>,
      6,
      10
    ]

    for (let i = 0; i < solutions.length; i++) {
      const result = solutions[i].apply(null, args)
      expect(result).toEqual(23)
    }
  })
})

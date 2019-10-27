// from binarysearch import binalysearch

// def test_binarysearch():
//     assert binalysearch([1, 3, 5, 8], 1) == 0
//     #  1 , [3],  5 ,  8  LOW: 0  HIGH: 3 MID: 1 GUESS: 3
//     # [1],  3 ,  5 ,  8  LOW: 0  HIGH: 0 MID: 0 GUESS: 1

//     assert binalysearch([1, 3, 5, 8], 8) == 3
//     #  1 , [3],  5 ,  8  LOW: 0  HIGH: 3 MID: 1 GUESS: 3
//     #  1 ,  3 , [5],  8  LOW: 2  HIGH: 3 MID: 2 GUESS: 5
//     #  1 ,  3 ,  5 , [8] LOW: 3  HIGH: 3 MID: 2 GUESS: 8

//     assert binalysearch([1, 3, 5, 8], 2) == -1
//     #  1 , [3],  5 ,  8  LOW: 0  HIGH: 3 MID: 1 GUESS: 3
//     # [1],  3 ,  5 ,  8  LOW: 0  HIGH: 0 MID: 0 GUESS: 1
//     #  1 ,  3 ,  5 ,  8  LOW: 1  HIGH: 0 MID: X GUESS: X (now LOW gets higher than HIGH)

import { binalysearch } from "./binarysearch"

describe("binary search", () => {
  it("should returns index of the subject", () => {
    const nums = [1, 3, 5, 8]

    expect(binalysearch(nums, 1)).toBe(0)
    expect(binalysearch(nums, 8)).toBe(3)
  })

  it("should returns -1 if not found", () => {
    const nums = [1, 3, 5, 8]

    expect(binalysearch(nums, 2)).toBe(-1)
  })
})

// from selectionsort import selectionsort, find_minimum

// def test_find_minimum():
//     assert find_minimum([8, 3, 4, 9]) == 1
//     assert find_minimum([8, 3, 2, 9]) == 2
//     assert find_minimum([0, 3, 6, 9]) == 0

import { selectionsort, lowest } from "./selectionsort"

describe("selection sort", () => {
  it("should return sorted list", () => {
    const result = selectionsort([9, 1, 2, 23, 4])
    expect(result).toEqual([1, 2, 4, 9, 23])
  })

  it("returns empty array for empty array", () => {
    const result = selectionsort([])
    expect(result).toEqual([])
  })
})

describe("lowest", () => {
  it("returns index of the lowest number of the array", () => {
    expect(lowest([8, 3, 4, 9])).toBe(1)
    expect(lowest([8, 3, 2, 9])).toBe(2)
    expect(lowest([0, 3, 2, 9])).toBe(0)
  })

  it("returns -1 for empty array", () => {
    expect(lowest([])).toBe(-1)
  })
})

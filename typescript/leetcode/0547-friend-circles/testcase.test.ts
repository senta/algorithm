import { findCircleNum as solution01 } from "./solution01"

const solutions = [solution01]

type Input = [number[][]]

describe("547. Friend Circles", () => {
  test("case 1", () => {
    const args: Input = [[[1, 1, 0], [1, 1, 0], [0, 0, 1]]]

    for (let i = 0; i < solutions.length; i++) {
      expect(solutions[i].apply(null, args)).toBe(2)
    }
  })

  test("case 2", () => {
    const args: Input = [[[1, 1, 0], [1, 1, 1], [0, 1, 1]]]

    for (let i = 0; i < solutions.length; i++) {
      expect(solutions[i].apply(null, args)).toBe(1)
    }
  })

  test("case 3", () => {
    const args: Input = [
      [[1, 1, 0, 1], [1, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]
    ]

    for (let i = 0; i < solutions.length; i++) {
      expect(solutions[i].apply(null, args)).toBe(1)
    }
  })

  test("case 4", () => {
    const args: Input = [
      [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]
    ]

    for (let i = 0; i < solutions.length; i++) {
      expect(solutions[i].apply(null, args)).toBe(1)
    }
  })

  test("case 5", () => {
    const args: Input = [
      [
        [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      ]
    ]

    for (let i = 0; i < solutions.length; i++) {
      expect(solutions[i].apply(null, args)).toBe(3)
    }
  })

  test("case 6", () => {
    const args: Input = [
      [
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 1],
        [0, 0, 1, 1, 0],
        [0, 0, 1, 1, 1],
        [0, 1, 0, 1, 1]
      ]
    ]

    for (let i = 0; i < solutions.length; i++) {
      expect(solutions[i].apply(null, args)).toBe(1)
    }
  })
})

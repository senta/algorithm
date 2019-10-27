import { knapsack, Value } from "./knapsack"

describe("knapsack problem", () => {
  it("01", () => {
    const items: Value[] = [
      ["Guitar", 1, 1500],
      ["Stereo", 4, 3000],
      ["Laptop", 3, 2000]
    ]

    const result = knapsack(items, 4)
    expect(result).toEqual([3500, new Set(["Laptop", "Guitar"])])
  })

  it("02", () => {
    const items: Value[] = [
      ["Guitar", 1, 1500],
      ["Stereo", 4, 3000],
      ["Laptop", 3, 2000],
      ["iPhone", 1, 2000]
    ]

    const result = knapsack(items, 4)
    expect(result).toEqual([4000, new Set(["Laptop", "iPhone"])])
  })

  it("03", () => {
    const items: Value[] = [
      // 1 = 0.5 days
      ["Westminster Abbey", 1, 7],
      ["Globe Theater", 1, 6],
      ["National Gallery", 2, 9],
      ["British Museum", 4, 9],
      ["ST. Paul's Cathedral", 1, 8]
    ]

    const result = knapsack(items, 4)
    expect(result).toEqual([
      24,
      new Set(["Westminster Abbey", "National Gallery", "ST. Paul's Cathedral"])
    ])
  })

  it("04", () => {
    const items: Value[] = [
      // 1 = 0.5 days
      ["Water", 3, 10],
      ["Book", 1, 3],
      ["Food", 2, 9],
      ["Jacket", 2, 5],
      ["Camera", 1, 6]
    ]

    const result = knapsack(items, 6)
    expect(result).toEqual([25, new Set(["Water", "Food", "Camera"])])
  })
})

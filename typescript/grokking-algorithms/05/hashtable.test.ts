import { Hashtable } from "./hashtable"

describe("Hashtable", () => {
  describe("primehash", () => {
    it("converts a string value into number", () => {
      expect(Hashtable.primehash("bag", 10)).toBe(2)
    })
  })

  const table = new Hashtable<number>(10)
  table.add("bag", 90.23)
  table.add("apple", 0.72)
  table.add("bottle", 24.0)

  expect(table.get("bag")).toBe(90.23)
  expect(table.get("apple")).toBe(0.72)
  expect(table.get("bottle")).toBe(24.0)
})

import { createTree, toArray } from "../Tree"

describe("Tree <-> Array", () => {
  it("creates a tree from an array", () => {
    const root = createTree([1, 2, 3, 4, 5, 6])

    expect(root!.val).toEqual(1)
    expect(root!.left!.val).toEqual(2)
    expect(root!.right!.val).toEqual(3)
    expect(root!.left!.left!.val).toEqual(4)
    expect(root!.left!.right!.val).toEqual(5)
    expect(root!.right!.left!.val).toEqual(6)
    expect(root!.right!.left!.left).toEqual(null)
    expect(root!.right!.left!.right).toEqual(null)
  })

  it("returns null if the list is empty", () => {
    const root = createTree([])
    expect(root).toBeNull()
  })

  it("converts a LinkedList to an Array", () => {
    const root = createTree([1, 2, 3, 4, 5, 6])
    const array = toArray(root)

    expect(array).toEqual([1, 2, 3, 4, 5, 6])
  })

  it("accepts null as its value", () => {
    const root = createTree([0, 1, 2, null, 4, null, 6])
    const array = toArray(root)

    expect(array).toEqual([0, 1, 2, null, 4, null, 6])
  })
})

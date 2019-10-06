import { createList, toArray } from "../List"

describe("List <-> Array", () => {
  it("creates linked list from an array", () => {
    const head = createList([1, 2, 3])

    expect(head!.val).toEqual(1)
    expect(head!.next!.val).toEqual(2)
    expect(head!.next!.next!.val).toEqual(3)
  })

  it("returns null if the list is empty", () => {
    const head = createList([])
    expect(head).toBeNull()
  })

  it("converts a LinkedList to an Array", () => {
    const head = createList([1, 2, 3])
    const array = toArray(head)

    expect(array).toEqual([1, 2, 3])
  })
})

import { List, createList, toArray } from "../List"

describe("List", () => {
  it("has the value as val", () => {
    const value = 10

    const list = new List(value)
    expect(list.val).toEqual(value)
  })

  it("links to next node", () => {
    const list = new List(10)
    list.next = new List(20)

    expect(list.next.val).toEqual(20)
  })
})

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

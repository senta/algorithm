// if __name__ == "__main__":
//     # This is a __direct graph__ which represents friend relationship (in one-way)
//     graph = {
//         "you": {"alice", "bob", "claire"},
//         "bob": {"anju", "peggy"},
//         "alice": {"peggy"},
//         "claire": {"thom", "jonny"},
//         "anju": {},
//         "peggy": {"bob"},
//         "thom": {},
//         "jonny": {},
//     }

//     found, seller = find_mango_seller(graph)
//     if found:
//         print(f"mango sellar is {seller}")
//     else:
//         print("No mango seller is found")

import { findMangoSeller } from "./mangoseller"

describe("findMangoSeller", () => {
  const graph = {
    you: ["alice", "bob", "claire"],
    bob: ["anju", "peggy"],
    alice: ["peggy"],
    claire: ["thom", "jonny"],
    anju: [],
    peggy: ["bob"],
    thom: [],
    jonny: []
  }

  it('finds closest seller', () => {
    const [found, seller] = findMangoSeller(graph, "you", (name: string) => name == 'bob' || name == 'anju')

    expect(found).toBe(true)
    expect(seller).toBe('bob')
  })

  it('returns null if not found', () => {
    const [found, seller] = findMangoSeller(graph, "you", (name: string) => name === "dude")

    expect(found).toBe(false)
    expect(seller).toBe(null)
  })
})

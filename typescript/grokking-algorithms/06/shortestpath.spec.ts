import { shortestPath } from "./shortestpath"

describe("shortestPath", () => {
  it("finds shortest path from point A to B", () => {
    //     a
    //   /   \
    // b       c
    // | \    /
    // |   `- d
    //  \    /
    //     e
    const graph = { a: ["b", "c"], b: ["e"], c: ["d"], d: ["b", "e"] }
    expect(shortestPath(graph, "a", "e")).toEqual(["a", "b", "e"])
  })
})

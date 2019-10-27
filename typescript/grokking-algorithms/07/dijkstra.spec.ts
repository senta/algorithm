import { dijkstra } from "./dijkstra"
describe("cheapest path", () => {
  it("finds the least costs path", () => {
    const graph = {
      start: { a: 6, b: 2 },
      a: { goal: 1 },
      b: { a: 3, goal: 5 },
      goal: {}
    }

    const result = dijkstra(graph, "start", "goal")
    expect(result).toEqual(["start", "b", "a", "goal"])
  })

  it("exercise1", () => {
    const graph = {
      start: { a: 5, b: 2 },
      a: { c: 4, d: 2 },
      b: { a: 8, d: 7 },
      c: { d: 6, goal: 3 },
      d: { goal: 1 },
      goal: {}
    }

    const result = dijkstra(graph, "start", "goal")
    expect(result).toEqual(["start", "a", "d", "goal"])
  })

  it("exercise2", () => {
    const graph = {
      start: { a: 10 },
      a: { c: 20 },
      b: { a: 1 },
      c: { b: 1, goal: 30 },
      goal: {}
    }

    const result = dijkstra(graph, "start", "goal")
    expect(result).toEqual(["start", "a", "c", "goal"])
  })

  it.skip("exercise3", () => {
    // this one is not possible to solve by using Dijkstra's algorithm
    // because it has negative weight (-1 from C to A)

    const graph = {
      start: { a: 2, b: 2 },
      a: { b: 2 },
      b: { c: 2, goal: 2 },
      c: { a: -1, goal: 2 },
      goal: {}
    }

    const result = dijkstra(graph, "start", "goal")
    expect(result).toEqual(["start", "a", "b", "goal"])
  })
})

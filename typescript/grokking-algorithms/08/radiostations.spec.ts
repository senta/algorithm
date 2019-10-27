import { pickStations } from "./radiostations"

describe("radio station", () => {
  const states = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])
  const stations = {
    knone: new Set(["id", "nv", "ut"]),
    ktwo: new Set(["wa", "id", "mt"]),
    kthree: new Set(["or", "nv", "ca"]),
    kfour: new Set(["nv", "ut"]),
    kfive: new Set(["ca", "az"])
  }

  it("pickk radio stations to cover all states", () => {
    const result = pickStations(states, stations)
    expect(result).toEqual(new Set(["kfive", "ktwo", "knone", "kthree"]))
  })
})

interface Stations {
  [key: string]: Set<string>
}

export function pickStations(
  states: Set<string>,
  stations: Stations
): Set<string> {
  const picked = new Set<string>()
  let covered = new Set<string>()

  while (states.size > covered.size) {
    let count = Infinity
    let station = ""

    for (const key of Object.keys(stations)) {
      if (picked.has(key)) {
        continue
      }
      const c = sub(states, covered, stations[key])
      if (count > c.size) {
        station = key
        count = c.size
      }
    }

    picked.add(station)
    covered = union(covered, stations[station])
  }

  return picked
}

function f(method: "delete" | "add") {
  return function<T>(...sets: Set<T>[]): Set<T> {
    const subset = new Set(sets[0])

    for (let i = 1; i < sets.length; i++) {
      const set = sets[i]
      for (const v of set) {
        subset[method](v)
      }
    }

    return subset
  }
}

const sub = f("delete")
const union = f("add")

// # picked_stations = set()

// # while states_needed:
// #     most_covered = None
// #     cover_count = len(states_needed)
// #     for station, states in stations.items():
// #         count = len(states_needed - states)
// #         if count < cover_count and station not in picked_stations:
// #             cover_count = count
// #             most_covered = station

// #     picked_stations.add(most_covered)
// #     states_needed -= stations[most_covered]

// # print(picked_stations)

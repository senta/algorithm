export type Value = [string, number, number]

export function knapsack(
  items: Value[],
  capacity: number
): [number, Set<string>] {
  const values: number[][] = new Array(items.length)
    .fill(null)
    .map(() => new Array(capacity - 1).fill(0))

  const combinations: Set<string>[][] = new Array(items.length)
    .fill(null)
    .map(() => new Array(capacity - 1).fill(new Set()))

  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < capacity; j++) {
      const currentCapacity = j + 1
      const [name, cost, value] = items[i]
      const above = valueAt(values, i - 1, j) || 0

      if (currentCapacity - cost < 1) {
        values[i][j] = value
        combinations[i][j] = new Set([name])
      } else {
        values[i][j] = (valueAt(values, i - 1, j - cost) || 0) + value
        combinations[i][j] = union(
          valueAt(combinations, i - 1, j - cost) || new Set(),
          new Set([name])
        )
      }

      if (cost > currentCapacity || values[i][j] < above) {
        values[i][j] = above
        combinations[i][j] = valueAt(combinations, i - 1, j) || new Set()
      }
    }
  }

  return [values.pop()!.pop()!, combinations.pop()!.pop()!]
}

function valueAt<T>(list: T[][], i: number, j: number): T | undefined {
  if (i < 0 || j < 0) {
    return undefined
  }
  return list[i][j]
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

const union = f("add")

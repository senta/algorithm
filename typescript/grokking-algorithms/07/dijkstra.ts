type Neighbors = {
  [key: string]: number
}

interface Graph {
  [key: string]: Neighbors
}

export function dijkstra(graph: Graph, start: string, goal: string): string[] {
  // 0. create "cost" and "parent" table
  const costs = new Map<string, number>()
  const parents = new Map<string, string | undefined>()
  for (const key of Object.keys(graph)) {
    costs.set(key, Infinity)
    parents.set(key, undefined)
  }
  for (const key of Object.keys(graph[start])) {
    costs.set(key, graph[start][key])
    parents.set(key, start)
  }

  // 1. update the tables by cheaper cost route
  const processed = new Set<string>()
  while (true) {
    let lowest = Infinity
    let node: string | null = null

    for (const [key, value] of costs) {
      if (!processed.has(key) && value <= lowest) {
        lowest = value
        node = key
      }
    }

    if (!node) {
      break
    }

    const cost = costs.get(node)!
    for (let neighbor of Object.keys(graph[node])) {
      if (graph[node][neighbor] + cost < costs.get(neighbor)!) {
        costs.set(neighbor, graph[node][neighbor] + cost)
        parents.set(neighbor, node)
      }
    }
    processed.add(node)
  }

  // 2. follow the parent table from the tail
  const path = [goal]
  let node = parents.get(goal)
  while (node) {
    path.unshift(node)
    node = parents.get(node)
  }

  return path
}

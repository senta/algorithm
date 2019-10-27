// from collections import deque

// # Shoule be able able to write without having a class tho
// class Point:
//     def __init__(self, place, path=None):
//         if not path:
//             path = []

//         self.place = place
//         self.path = path + [place]

// def shortest_path(graph, start, goal):
//     queue = deque()
//     queue += [Point(start)]

//     while queue:
//         current: Point = queue.popleft()  # use Queue for BFS
//         path = current.path

//         if current.place == goal:
//             return (True, current.path)

//         queue += [Point(point, path) for point in graph[current.place]]

//     return (False, None)

type Graph = {
  [key: string]: string[]
}

type Path = string[]

interface Route {
  point: string
  path: Path
}

export function shortestPath(
  graph: Graph,
  start: string,
  goal: string
): Path | null {
  const checked = new Set<string>()
  const queue: Route[] = [{ point: start, path: [] }]

  while (queue.length) {
    const route = queue.shift()!
    if (checked.has(route.point)) {
      continue
    }
    checked.add(route.point)

    if (route.point === goal) {
      return [...route.path, route.point]
    }

    queue.push.apply(
      queue,
      graph[route.point].map(x => ({
        point: x,
        path: route.path.concat(route.point)
      }))
    )
  }

  return null
}

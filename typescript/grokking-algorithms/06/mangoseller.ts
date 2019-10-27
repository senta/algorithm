type Graph = {
  [key: string]: string[]
}

export function findMangoSeller(
  graph: Graph,
  start: string,
  isMangoSeller: (name: string) => boolean
): [boolean, string | null] {
  const checked = new Set<string>()
  const queue = Array.from(graph[start])

  while (queue.length) {
    const maybeSeller = queue.shift()!

    // cache the result to avoid the infinite loop
    if (checked.has(maybeSeller)) {
      continue
    }
    checked.add(maybeSeller)

    if (isMangoSeller(maybeSeller)) {
      return [true, maybeSeller]
    }

    queue.push.apply(queue, graph[maybeSeller])
  }

  return [false, null]
}

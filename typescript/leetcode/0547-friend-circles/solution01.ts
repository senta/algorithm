/**
 * @param {number[][]} M
 * @return {number}
 */
export function findCircleNum(M: number[][]): number {
  const circles: Set<number>[] = []

  function follow(network: Set<number>, j: number) {
    if (network.has(j)) {
      return
    }

    network.add(j)
    for (let k = 0; k < M[j].length; k++) {
      if (M[j][k] === 1) {
        follow(network, k)
      }
    }
  }

  for (let i = 0; i < M.length; i++) {
    const exists = circles.some(el => el.has(i))
    if (exists) {
      continue
    }

    const circle = new Set<number>()

    for (let j = 0; j < M[i].length; j++) {
      if (M[i][j] !== 1) {
        continue
      }
      follow(circle, j)
    }

    if (circle.size) {
      circles.push(circle)
    }
  }

  return circles.length
}

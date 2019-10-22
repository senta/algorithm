/**
 * @param {number[]} cost
 * @return {number}
 */
export function minCostClimbingStairs(cost: number[]): number {
  let a = 0
  let b = 0

  for (let step = 0; step < cost.length; step++) {
    ;[a, b] = [cost[step] + Math.min(a, b), a]
    console.log({a, b})
  }

  return Math.min(a, b)
}

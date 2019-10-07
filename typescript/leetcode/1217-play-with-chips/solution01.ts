/**
 * @param {number[]} chips
 * @return {number}
 */
export function minCostToMoveChips(chips: number[]): number {
  let odd = 0
  let even = 0

  for (let i = 0; i < chips.length; i++) {
    if (chips[i] % 2 == 0) {
      even += 1
    } else {
      odd += 1
    }
  }

  return Math.min(odd, even)
}

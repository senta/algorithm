/**
 * @param {number[]} chips
 * @return {number}
 */
export function minCostToMoveChips(chips: number[]): number {
  if (chips.length < 2) {
    return 0
  }
  if (chips.length < 4) {
    return 1
  }

  const center = Math.floor((chips.length -1) / 2)
  let cost = 0
  for (let i = 0; i < center; i++) {
    const distance = center - i
    cost += distance % 2 === 0 ? 0 : 1
  }

  return chips.length % 2 == 0 ? cost * 2 + 1 : cost * 2
}

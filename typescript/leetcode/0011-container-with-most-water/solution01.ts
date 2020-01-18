/**
 * @param {number[]} height
 * @return {number}
 */
export function maxArea(height: number[]): number {
  let x1 = 0
  let x2 = height.length - 1
  let maxarea = 0

  while (x1 < x2) {
    const y1 = height[x1]
    const y2 = height[x2]

    const area = (x2 - x1) * Math.min(y1, y2)
    maxarea = Math.max(maxarea, area)

    if (y1 < y2) {
      x1 += 1
    } else {
      x2 -= 1
    }
  }

  return maxarea
}

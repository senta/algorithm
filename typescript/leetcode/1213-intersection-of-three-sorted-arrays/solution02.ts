/**
 * @param {number[]} arr3
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
export function arraysIntersection(
  arr1: number[],
  arr2: number[],
  arr3: number[]
) {
  const counter = new Map<number, number>()
  const len = Math.max(arr1.length, arr2.length, arr3.length)

  for (let i = 0; i < len; i++) {
    counter.set(arr1[i], (counter.get(arr1[i]) || 0) + 1)
    counter.set(arr2[i], (counter.get(arr2[i]) || 0) + 1)
    counter.set(arr3[i], (counter.get(arr3[i]) || 0) + 1)
  }

  const intersection = []
  for (const [k, v] of counter) {
    if (k != null && v === 3) {
      intersection.push(k)
    }
  }

  return intersection
}

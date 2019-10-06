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
  let i = 0
  let j = 0
  let k = 0

  const intersection = []

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr1[i] === arr3[k]) {
      intersection.push(arr1[i])
      i += 1
      j += 1
      k += 1
    } else if (arr1[i] < arr2[j]) {
      i += 1
    } else if (arr2[j] < arr3[k]) {
      j += 1
    } else {
      k += 1
    }
  }

  return intersection
}

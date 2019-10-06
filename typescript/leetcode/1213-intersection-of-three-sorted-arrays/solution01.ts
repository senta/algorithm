/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
export function arraysIntersection(
  arr1: number[],
  arr2: number[],
  arr3: number[]
) {
  const counter = new Map()
  for (let i = 0; i < arr1.length; i++) {
    const number = arr1[i]
    counter.set(number, 1)
  }

  for (let i = 0; i < arr2.length; i++) {
    const number = arr2[i]
    if (counter.has(number)) {
      counter.set(number, 2)
    }
  }

  const intersection = []
  for (let i = 0; i < arr3.length; i++) {
    const number = arr3[i]
    if (counter.has(number) && counter.get(number) == 2) {
      intersection.push(number)
    }
  }

  return intersection
}

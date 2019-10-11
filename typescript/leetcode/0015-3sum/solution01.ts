/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export function threeSum(nums: number[]): number[][] {
  const sum: number[][] = []

  // O(n**3)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] !== 0) {
          continue
        }

        let duplicated = false
        const possible = [nums[i], nums[j], nums[k]]
        for (let l = 0; l < sum.length; l++) {
          const triplets = sum[l]
          if (same(triplets, possible)) {
            duplicated = true
            break
          }
        }
        if (!duplicated) {
          sum.push(possible)
        }
      }
    }
  }

  return sum
}

function same(a: number[], b: number[]): boolean {
  a.sort((a, b) => a - b)
  b.sort((a, b) => a - b)
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2]
}

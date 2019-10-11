/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const hash: boolean[][][] = []
  const sum: number[][] = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const a = nums[i]
        const b = nums[j]
        const c = nums[k]
        if (a + b + c !== 0) {
          continue
        }
        if (hash[a] && hash[a][b] && hash[a][b][c]) {
          continue
        }
        if (!hash[a]) {
          hash[a] = []
        }
        if (!hash[a][b]) {
          hash[a][b] = []
        }
        hash[a][b][c] = true
        sum.push([a, b, c])
      }
    }
  }

  return sum
}

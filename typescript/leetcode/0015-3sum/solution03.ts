/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 0. sort the given numbers
 * 1. loop the numbers from 0 through length - 2.
 *    since we need three elements to sum
 * 2. in each loop, 
 * 
 */
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const res = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] == nums[i - 1]) {
      // skip consecutive numbers
      continue
    }

    let lo = i + 1
    let hi = nums.length - 1
    const sum = 0 - nums[i]

    while (lo < hi) {
      if (nums[lo] + nums[hi] == sum) {
        res.push([nums[i], nums[lo], nums[hi]])

        // skip consecutive numbers
        while (lo < hi && nums[lo] === nums[lo + 1]) {
          lo++
        }
        while (lo < hi && nums[hi] === nums[hi - 1]) {
          hi--
        }
        lo++
        hi--
      } else if (nums[lo] + nums[hi] < sum) {
        lo++
      } else {
        hi--
      }
    }
  }

  return res
}

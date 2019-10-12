from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = []

        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue  # to avoid duplication

            lo = i + 1
            hi = len(nums) - 1

            complement = 0 - nums[i]
            while lo < hi:
                if (nums[lo] + nums[hi]) == complement:
                    result.append([nums[i], nums[lo], nums[hi]])

                    # to avoid duplication
                    while nums[lo] == nums[lo + 1]:
                        lo += 1
                    while nums[hi] == nums[hi - 1]:
                        hi -= 1

                    lo += 1
                    hi -= 1
                elif nums[lo] + nums[hi] < complement:
                    lo += 1
                else:
                    hi -= 1

        return result

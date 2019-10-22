from typing import List


class Solution:
    def minCostClimbingStairs(self, costs: List[int]) -> int:
        a = 0
        b = 0
        for cost in costs:
            a, b = cost + min(a, b), a
        return min(a, b)

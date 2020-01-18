from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        x1 = 0
        x2 = len(height) - 1
        maxarea = 0

        while x1 < x2:
            y1 = height[x1]
            y2 = height[x2]

            area = min(y1, y2) * (x2 - x1)
            maxarea = max(maxarea, area)

            if y1 < y2:
                x1 += 1
            else:
                x2 -= 1

        return maxarea

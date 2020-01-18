from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        maxarea = 0

        for x1, y1 in enumerate(height):
            for x2 in range(x1 + 1, len(height)):
                y2 = height[x2]
                maxarea = max(maxarea, (x2 - x1) * min(y1, y2))

        return maxarea

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

            # I didn't need to find next bigger and closest index
            # since I compare the areas with =max()=
            if y1 < y2:
                shorter = y1
                start = x1
                end = x2
                step = 1
            else:
                shorter = y2
                start = x2
                end = x1
                step = -1

            bigger = None
            for i in range(start, end, step):
                if height[i] > shorter:
                    bigger = i
                    break
            if bigger is None:
                break

            if y1 < y2:
                x1 = bigger
            else:
                x2 = bigger

        return maxarea

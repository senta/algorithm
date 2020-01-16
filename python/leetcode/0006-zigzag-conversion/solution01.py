class Solution:
    # https://leetcode.com/problems/zigzag-conversion/discuss/3404/Python-O(n)-Solution-in-96ms-(99.43)
    def convert(self, s: str, numRows: int) -> str:
        table = [""] * numRows

        row = 0
        step = 1

        if numRows == 1 or len(s) < numRows:
            return s

        for x in s:
            table[row] += x

            if row == 0:
                step = 1
            elif row == numRows -1:
                step = -1
            row += step

        return "".join(table)

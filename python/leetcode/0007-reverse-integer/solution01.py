MAX_INTERGER32 = 2 ** 31


class Solution:
    def reverse(self, x: int) -> int:
        multply = 1
        if x < 0:
            multply = -1

        x *= multply
        reversed = 0
        while x > 0:
            reversed = reversed * 10 + x % 10
            if reversed > MAX_INTERGER32:
                return 0
            x = x // 10

        return reversed * multply

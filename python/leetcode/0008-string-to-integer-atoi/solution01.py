WHITE_SPACE = ' '
MAX_INTERGER32 = 2 ** 31 -1
MIN_INTERGER32 = 2 ** 31 * -1

CHAR_PLUS = 43
CHAR_MINUS = 45
CHAR_0 = 48
CHAR_9 = 57

class Solution:
    def myAtoi(self, string: str) -> int:
        num = 0
        factor = 1
        index = 0

        while index < len(string) and string[index] == WHITE_SPACE:
            index += 1

        if index < len(string):
            char = ord(string[index])
        else:
            char = 0

        if char == CHAR_PLUS:
            index += 1
        elif char == CHAR_MINUS:
            index += 1
            factor = -1
        elif char < CHAR_0 or char > CHAR_9:
            return 0

        while index < len(string):
            char = ord(string[index])
            if char < CHAR_0 or char > CHAR_9:
                break
            num *= 10
            num += char - CHAR_0

            index += 1

        return min(max(num * factor, MIN_INTERGER32), MAX_INTERGER32)

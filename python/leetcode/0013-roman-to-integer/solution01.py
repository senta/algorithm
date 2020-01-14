ROMAN = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

class Solution:
    def romanToInt(self, s: str) -> int:
        num = 0
        index = 0

        while index < len(s):
            current_str = s[index]
            next_str = ""

            if index + 1 < len(s):
                next_str = s[index + 1]

            current_value = ROMAN.get(current_str, 0)
            next_value = ROMAN.get(next_str, 0)

            if current_value < next_value:
                index += 1
                num += next_value - current_value
            else:
                num += current_value

            index += 1

        return num

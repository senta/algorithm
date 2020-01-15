class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxlen = 0
        sequence = ""

        for c in s:
            if c in sequence:
                maxlen = max(maxlen, len(sequence))
                i = sequence.index(c)
                sequence = sequence[i + 1::] + c
            else:
                sequence += c

        return max(maxlen, len(sequence))

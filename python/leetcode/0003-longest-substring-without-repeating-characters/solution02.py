class Solution:
    """
    Solution 2: Sliding Window
    """
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxlen = 0

        hashmap = {}

        i = 0
        for j in range(len(s)):
            char = s[j]
            i = max(hashmap.get(char, 0), i)
            maxlen = max(maxlen, j - i + 1)
            hashmap[char] = j + 1

        return maxlen

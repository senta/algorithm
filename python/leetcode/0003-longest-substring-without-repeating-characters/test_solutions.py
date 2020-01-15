import solution01
import solution02

modules = [solution01, solution02]

testcases = (
    (("dvdf",), 3),
    (("abcabcbb",), 3),
    (("bbbbb",), 1),
    (("pwwkew",), 3),
    (("",), 0),
    ((" ",), 1),
    (("abcde",), 5),
)

def test_case1():
    for module in modules:
        solution = module.Solution()

        for args, expected in testcases:
            assert solution.lengthOfLongestSubstring(*args) == expected

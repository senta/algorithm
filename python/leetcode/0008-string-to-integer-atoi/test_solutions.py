import solution01
from pprint import pprint
modules = [solution01]

testcases = (
    (("",), 0),
    (("   ",), 0),
    (("42", ), 42),
    (("   -42", ), -42),
    (("4193 with words", ), 4193),
    (("words and 987", ), 0),
    (("-91283472332", ), -2147483648),
    (("91283472332",), 2147483647))

def test_case1():
    for module in modules:
        solution = module.Solution()

        for args, expected in testcases:
            assert solution.myAtoi(*args) == expected

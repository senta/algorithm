import solution01
from pprint import pprint
modules = [solution01]

testcases = (
    ((3,), "III"),
    ((10,), "X"),
    ((161,), "CLXI"),
    ((4,), "IV"),
    ((9,), "IX"),
    ((58,), "LVIII"),
    ((1994,), "MCMXCIV"),
)

def test_case1():
    for module in modules:
        solution = module.Solution()

        for args, expected in testcases:
            assert solution.intToRoman(*args) == expected

import solution01
from pprint import pprint
modules = [solution01]

testcases = (
    (("III",), 3),
    (("IV",), 4),
    (("IX",), 9),
    (("LVIII",), 58),
    (("MCMXCIV",), 1994),
    (("",), 0)
)

def test_case1():
    for module in modules:
        solution = module.Solution()

        for args, expected in testcases:
            assert solution.romanToInt(*args) == expected

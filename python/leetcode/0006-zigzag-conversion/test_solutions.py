import solution01
from pprint import pprint
modules = [solution01]

testcases = (
    (("AB", 1), "AB"),
    (("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR"),
    (("PAYPALISHIRING", 4), "PINALSIGYAHRPI")
)

def test_case1():
    for module in modules:
        solution = module.Solution()

        for args, expected in testcases:
            assert solution.convert(*args) == expected

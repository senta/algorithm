import solution00
import solution01
from pprint import pprint
modules = [solution00, solution01]

testcases = (
    (([1,8,6,2,5,4,8,3,7],), 49),
    (([1,8,6,2,5,4,8,3],), 40),
    (([1,1],), 1),
    (([0,0],), 0),
)

def test_case1():
    for module in modules:
        solution = module.Solution()

        for args, expected in testcases:
            assert solution.maxArea(*args) == expected

import solution01

modules = [solution01]


def test_case1():
    for module in modules:
        solution = module.Solution()
        assert solution.minCostClimbingStairs([10, 15, 20]) == 15


def test_case2():
    for module in modules:
        solution = module.Solution()
        assert solution.minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]) == 6


def test_case3():
    for module in modules:
        solution = module.Solution()
        assert solution.minCostClimbingStairs([0, 0, 0, 0, 0]) == 0


def test_case4():
    for module in modules:
        solution = module.Solution()
        assert solution.minCostClimbingStairs([0, 2, 2, 1]) == 2

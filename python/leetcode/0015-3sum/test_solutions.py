import solution01

modules = [solution01]


def test_case1():
    for module in modules:
        solution = module.Solution()
        assert solution.threeSum([-1, 0, 1, 2, -1, -4]) == [[-1, -1, 2], [-1, 0, 1]]


def test_case2():
    for module in modules:
        solution = module.Solution()
        assert solution.threeSum([1, 2, -2, -1]) == []


def test_case3():
    for module in modules:
        solution = module.Solution()
        assert solution.threeSum([-1, 0, 1, 2, -1, -4, 0, 0]) == [
            [-1, -1, 2],
            [-1, 0, 1],
            [0, 0, 0],
        ]

import solution01

modules = [solution01]


def test_case1():
    for module in modules:
        solution = module.Solution()
        assert solution.reverse(123) == 321


def test_case2():
    for module in modules:
        solution = module.Solution()
        assert solution.reverse(-123) == -321


def test_case3():
    for module in modules:
        solution = module.Solution()
        assert solution.reverse(120) == 21

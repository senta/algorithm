import solution01
import solution02

modules = [solution01, solution02]


def test_case1():
    for module in modules:
        solution = module.Solution()
        assert solution.isPalindrome(121)


def test_case2():
    for module in modules:
        solution = module.Solution()
        assert solution.isPalindrome(1221)


def test_case3():
    for module in modules:
        solution = module.Solution()
        assert not solution.isPalindrome(-121)


def test_case4():
    for module in modules:
        solution = module.Solution()
        assert not solution.isPalindrome(10)


def test_case5():
    for module in modules:
        solution = module.Solution()
        assert solution.isPalindrome(0)

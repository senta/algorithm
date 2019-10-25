from functools import reduce
from cmath import sqrt


def distance(pointA, pointB) -> int:
    """calculate distance btween two points"""
    total = reduce(lambda a, x: a + (x[0] - x[1]) ** 2, zip(pointA, pointB), 0)
    return sqrt(total).real


print(distance([3, 4, 4, 1, 4], [4, 3, 5, 1, 5]))
print(distance([3, 4, 4, 1, 4], [2, 5, 1, 3, 1]))
print(distance([4, 3, 5, 1, 5], [2, 5, 1, 3, 1]))


def f(a, b):
    return reduce(lambda a, x: a + (x[0] - x[1]) ** 2, zip(a, b), 0)


n = f([3, 4, 4, 1, 4], [2, 5, 1, 3, 1])
m = f([3, 4, 4, 1, 4], [4, 3, 5, 1, 5])
# n = sum([(3 - 2) ** 2, (4 - 5) ** 2, (4 - 1) ** 2, (1 - 3) ** 2, (4 - 1) ** 2])
print(n, m)

def gcd(a: int, b: int):
    """Find Greatest Common Diviser of the number a and b

    Arguments:
        a {int} -- the number a
        b {int} -- the number b
    """
    a, b = min(a, b), max(a, b)
    print(a, b)
    if a < 2:
        return 0

    remaining = b % a
    if remaining == 0:
        print(a, "!!")
        return a

    return gcd(a, remaining)

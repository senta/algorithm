from divideandconquer import gcd


def test_divideandconquer():
    assert gcd(1680, 640) == 80
    assert gcd(1680, 641) == 0

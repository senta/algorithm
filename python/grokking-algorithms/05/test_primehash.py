from primehash import primehash, add_value, get_value


def test_primehash():
    assert primehash("bag", 10) == 2


def test_hashmap():
    size = 10
    arr = [None] * size
    add_value(arr, size, "bag", 90.23)
    add_value(arr, size, "apple", 0.72)
    add_value(arr, size, "bottle", 24.00)

    assert get_value(arr, size, "bag") == 90.23
    assert get_value(arr, size, "apple") == 0.72
    assert get_value(arr, size, "bottle") == 24.00

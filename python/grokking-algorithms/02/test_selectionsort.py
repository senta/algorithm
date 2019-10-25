from selectionsort import selectionsort, find_minimum


def test_selectionsort():
    assert selectionsort([9, 1, 2, 23, 4]) == [1, 2, 4, 9, 23]


def test_find_minimum():
    assert find_minimum([8, 3, 4, 9]) == 1
    assert find_minimum([8, 3, 2, 9]) == 2
    assert find_minimum([0, 3, 6, 9]) == 0

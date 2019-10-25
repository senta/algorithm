from typing import List


def selectionsort(numbers: List[int]) -> List[int]:
    """Sort `numbers` by using slection sort

    Arguments:
        numbers {List[int]} -- unsorted numbers

    Returns:
        List[int] -- sorted numbers (ascending order)
    """
    numbers = list(numbers)  # to keep original list as it is
    result = []
    while numbers:
        index = find_minimum(numbers)
        result.append(numbers.pop(index))

    return result


def find_minimum(numbers: List[int]) -> int:
    """Find a minimum number form the `numbers`

    Arguments:
        numbers {List[int]} -- numbers

    Returns:
        int -- index of minimum number
    """
    index = 0
    min = numbers[0]
    for i in range(len(numbers)):
        if numbers[i] < min:
            min = numbers[i]
            index = i
    return index

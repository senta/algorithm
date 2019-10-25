from typing import List


def binalysearch(numbers: List[int], target: int):
    """Search `target` from `numbers`

    Arguments:
        numbers {List[int]} -- **sorted** numbers
        target {int} -- a number to find

    Returns:
        number -- the indef of number if it's found. If not, -1.
    """
    low = 0
    high = len(numbers) - 1

    while low <= high:
        mid = (high + low) // 2
        guess = numbers[mid]

        if guess == target:
            return mid
        if guess < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1

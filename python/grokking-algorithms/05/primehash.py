PRIME_NUMBER = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
]


def primehash(key: str, size: int) -> int:
    """Hash a letters (a-z)

    Arguments:
        key {str} -- key string
        size {int} -- size of the hashtable

    Returns:
        int -- hashed value
    """
    return sum(PRIME_NUMBER[ord(s) - 97] for s in key) % size


def add_value(arr, size: int, key: str, value) -> None:
    index = primehash(key, size)
    arr[index] = value


def get_value(arr, size: int, key: str):
    index = primehash(key, size)
    return arr[index]

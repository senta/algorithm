from grid import Grid


def most_valuable(items, capacity):
    """
    The way on the book

    Check this video for recursion with "Memoization"
    https://www.youtube.com/watch?v=xOlhR_2QCXY
    """
    grid = Grid(len(items), capacity)

    for i in range(grid.rows):
        name, weight, value = items[i]
        for j in range(grid.cols):
            prev_value, prev_items = grid.get(i - 1, j) or [0, set()]
            remaining_value, remaining_items = grid.get(i - 1, j - weight) or [0, set()]

            if j + 1 >= weight and value + remaining_value > prev_value:
                grid[i][j] = (value + remaining_value, {name} | remaining_items)
            else:
                grid[i][j] = (prev_value, prev_items)

    return grid[-1][-1]


items = [("Guitar", 1, 1500), ("Stereo", 4, 3000), ("Laptop", 3, 2000)]
assert most_valuable(items, 4) == (3500, {"Laptop", "Guitar"})

items = [
    ("Guitar", 1, 1500),
    ("Stereo", 4, 3000),
    ("Laptop", 3, 2000),
    ("iPhone", 1, 2000),
]
assert most_valuable(items, 4) == (4000, {"Laptop", "iPhone"})


locations = [
    # 1 = 0.5 days
    ("Westminster Abbey", 1, 7),
    ("Globe Theater", 1, 6),
    ("National Gallery", 2, 9),
    ("British Museum", 4, 9),
    ("ST. Paul's Cathedral", 1, 8),
]
assert most_valuable(locations, 4) == (
    24,
    {"Westminster Abbey", "National Gallery", "ST. Paul's Cathedral"},
)

items = [
    ("Water", 3, 10),
    ("Book", 1, 3),
    ("Food", 2, 9),
    ("Jacket", 2, 5),
    ("Camera", 1, 6),
]
assert most_valuable(items, 6) == (25, {"Water", "Food", "Camera"})

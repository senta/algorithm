from grid import Grid


def common_string(word1, word2) -> int:
    grid = Grid(len(word1), len(word2), 0)

    for i in range(grid.rows):
        for j in range(grid.cols):
            if word1[i] == word2[i]:
                grid[i][j] = 1 + (grid.get(i - 1, j - 1) or 0)

    return max([max(row) for row in grid])


def common_sequence(word1, word2) -> int:
    grid = Grid(len(word1), len(word2), 0)

    for i in range(grid.rows):
        for j in range(grid.cols):
            if word1[i] == word2[i]:
                grid[i][j] = 1 + (grid.get(i - 1, j - 1) or 0)
            else:
                top = grid.get(i - 1, j, 0)
                left = grid.get(i, j - 1, 0)
                grid[i][j] = max([top, left])

    return grid[-1][-1]


assert common_string("hish", "fish") == 3
assert common_string("fosh", "fort") == 2
assert common_string("fosh", "fish") == 2

assert common_sequence("fosh", "fort") == 2
assert common_sequence("fosh", "fish") == 3

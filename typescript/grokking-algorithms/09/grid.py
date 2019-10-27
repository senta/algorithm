class Grid:
    """a wrapper of 2D list"""

    def __init__(self, rows, cols, default=None):
        self.__grid = [[default] * cols for i in range(rows)]
        self.__rows = rows
        self.__cols = cols

    @property
    def rows(self):
        return self.__rows

    @property
    def cols(self):
        return self.__cols

    def get(self, row, col, default=None):
        if row < 0 or row >= self.rows:
            return default
        if col < 0 or col >= self.cols:
            return default

        return self.__grid[row][col]

    def __getitem__(self, key):
        return self.__grid[key] or 0

    def __repr__(self):
        return self.__grid.__repr__()


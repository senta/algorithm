from collections import deque


# Shoule be able able to write without having a class tho
class Point:
    def __init__(self, place, path=None):
        if not path:
            path = []

        self.place = place
        self.path = path + [place]


def shortest_path(graph, start, goal):
    queue = deque()
    queue += [Point(start)]

    while queue:
        current: Point = queue.popleft()  # use Queue for BFS
        path = current.path

        if current.place == goal:
            return (True, current.path)

        queue += [Point(point, path) for point in graph[current.place]]

    return (False, None)


if __name__ == "__main__":
    graph = {"a": ["b", "c"], "b": ["e"], "c": ["d"], "d": ["b", "e"]}
    #       a
    #     /   \
    #   b       c
    #   | \    /
    #   |   `- d
    #    \    /
    #       e
    found, path = shortest_path(graph, "a", "e")

    assert found
    assert path == ["a", "b", "e"]
    print("->".join(path))

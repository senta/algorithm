# Example of Dijkstra's algorithm to find
# the shortest path to get to `fin` from `start`
from collections import deque


def find_lowest_cost_node(costs, processed):
    """find lowest cost node which is not processed"""
    lowest = float("inf")
    lowest_node = None

    for node in costs:
        if costs[node] < lowest and node not in processed:
            lowest = costs[node]
            lowest_node = node

    return lowest_node


def dikstra(graph, costs, parents, goal):
    processed = []

    node = find_lowest_cost_node(costs, processed)
    while node:
        cost = costs[node]
        neighbors = graph[node]
        for neighbor in neighbors.keys():
            cost_through_node = cost + neighbors[neighbor]
            if cost_through_node < costs[neighbor]:
                costs[neighbor] = cost_through_node
                parents[neighbor] = node

        processed.append(node)
        node = find_lowest_cost_node(costs, processed)
    dump_result(goal, costs, parents)


def dump_result(head, costs: dict, parents):
    """Print the result with format"""
    path = deque()

    while head:
        cost = costs.get(head, 0)
        path.appendleft((head, cost))
        head = parents.get(head, None)

    first = True

    while path:
        node = path.popleft()
        if not first:
            print(" -> ", end="")
        first = False
        print(f"({node[1]})", node[0], sep=" ", end="")
    print("")


def example():
    graph = {}
    graph["start"] = {"a": 6, "b": 2}
    graph["a"] = {"fin": 1}
    graph["b"] = {"a": 3, "fin": 5}
    graph["fin"] = {}

    costs = {}
    costs["a"] = 6
    costs["b"] = 2
    costs["fin"] = float("inf")

    parents = {}
    parents["a"] = "start"
    parents["b"] = "start"
    parents["fin"] = None

    dikstra(graph, costs, parents, "fin")


def exercise1():
    graph = {}
    graph["start"] = {"a": 5, "b": 2}
    graph["a"] = {"c": 4, "d": 2}
    graph["b"] = {"a": 8, "d": 7}
    graph["c"] = {"d": 6, "fin": 3}
    graph["d"] = {"fin": 1}
    graph["fin"] = {}

    costs = {}
    costs["a"] = 5
    costs["b"] = 2
    costs["c"] = float("inf")
    costs["d"] = float("inf")
    costs["fin"] = float("inf")

    parents = {}
    parents["a"] = "start"
    parents["b"] = "start"
    parents["c"] = None
    parents["d"] = None
    parents["fin"] = None

    dikstra(graph, costs, parents, "fin")


def exercise2():
    graph = {}
    graph["start"] = {"a": 10}
    graph["a"] = {"c": 20}
    graph["b"] = {"a": 1}
    graph["c"] = {"b": 1, "fin": 30}
    graph["fin"] = {}

    costs = {}
    costs["a"] = 10
    costs["b"] = float("inf")
    costs["c"] = float("inf")
    costs["fin"] = float("inf")

    parents = {}
    parents["a"] = "start"
    parents["b"] = None
    parents["c"] = None
    parents["fin"] = None

    dikstra(graph, costs, parents, "fin")


def exercise3():
    # not possible to solve by using Dijkstra's algorithm
    # because it has negative weight (-1 from C to A)
    graph = {}
    graph["start"] = {"a": 2, "b": 2}
    graph["a"] = {"b": 2}
    graph["b"] = {"c": 2, "fin": 2}
    graph["c"] = {"a": -1, "fin": 2}
    graph["fin"] = {}

    costs = {}
    costs["a"] = 2
    costs["b"] = float("inf")
    costs["c"] = float("inf")
    costs["fin"] = float("inf")

    parents = {}
    parents["a"] = "start"
    parents["b"] = None
    parents["c"] = None
    parents["fin"] = None

    dikstra(graph, costs, parents, "fin")


if __name__ == "__main__":
    example()
    exercise1()
    exercise2()
    exercise3()

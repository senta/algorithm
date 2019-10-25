from collections import deque


def is_mango_seller(name):
    return name[-1] == "j"


def find_mango_seller(graph, start="you"):
    checked = set()
    queue = deque()
    queue += graph[start]

    while queue:
        maybeseller = queue.popleft()  # use Queue for BFS

        # we need to check if we already checked the one already
        # to avoid infinite reference
        if maybeseller in checked:
            continue
        print(maybeseller)
        checked.add(maybeseller)

        if is_mango_seller(maybeseller):
            return (True, maybeseller)

        queue += graph[maybeseller]

    return (False, None)


if __name__ == "__main__":
    # This is a __direct graph__ which represents friend relationship (in one-way)
    graph = {
        "you": {"alice", "bob", "claire"},
        "bob": {"anju", "peggy"},
        "alice": {"peggy"},
        "claire": {"thom", "jonny"},
        "anju": {},
        "peggy": {"bob"},
        "thom": {},
        "jonny": {},
    }

    found, seller = find_mango_seller(graph)
    if found:
        print(f"mango sellar is {seller}")
    else:
        print("No mango seller is found")

from typing import Generic, TypeVar, Optional, List

T = TypeVar("T")


class TreeNode(Generic[T]):
    val: Optional[T]
    left: Optional["TreeNode[T]"]
    right: Optional["TreeNode[T]"]

    def __init__(self, val: T):
        self.val = val
        self.left = None
        self.right = None


root = TreeNode(10)
root.left


def create_tree(values: List[T], index: int = 0) -> Optional[TreeNode[T]]:
    if len(values) - 1 < index:
        return None

    root = TreeNode(values[index])
    root.left = create_tree(values, index * 2 + 1)
    root.right = create_tree(values, index * 2 + 2)

    return root


def create_list(root, values=None, index=0) -> list:
    if not values:
        values = []

    if not root:
        return values

    size = len(values) - 1
    if size <= index:
        values += [None] * (index - size)

    values[index] = root.val
    create_list(root.left, values, index * 2 + 1)
    create_list(root.right, values, index * 2 + 2)

    return values

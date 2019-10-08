from typing import Generic, TypeVar, Optional, List

T = TypeVar("T")


class ListNode(Generic[T]):
    val: T
    next: Optional["ListNode[T]"]

    def __init__(self, val: T):
        self.val = val
        self.next = None


def create_linked_list(values: List[T]) -> Optional[ListNode[T]]:
    """Create a linked-list into a list

    Arguments:
        values {List[T]} -- values of list

    Returns:
        Optional[ListNode[T]] -- head of the linked-list
    """
    node = None
    for val in reversed(values):
        prev = ListNode(val)
        prev.next = node
        node = prev

    return node


def create_list(head: Optional[ListNode[T]]) -> List[T]:
    """Convert a linked-list into a list

    Arguments:
        head {Optional[ListNode[T]]} -- The head of linked-list

    Returns:
        List[T] -- list of values of linked-list
    """
    values: List[T] = []

    while head:
        values.append(head.val)
        head = head.next

    return values

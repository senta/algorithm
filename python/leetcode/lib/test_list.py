from .list import create_linked_list, create_list


def test_create_linked_list():
    head = create_linked_list([1, 2, 3])

    assert head.val == 1
    assert head.next.val == 2
    assert head.next.next.val == 3

    assert create_linked_list([]) is None


def test_create_list():
    head = create_linked_list([1, 2, 3])
    assert create_list(head) == [1, 2, 3]
    assert create_list(None) == []

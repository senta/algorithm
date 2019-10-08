from .tree import create_tree, create_list


def test_create_tree():
    root = create_tree([1, 2, 3, 4, 5, 6])

    assert root.val == 1
    assert root.left.val == 2
    assert root.right.val == 3
    assert root.left.left.val == 4
    assert root.left.right.val == 5
    assert root.right.left.val == 6
    assert root.right.left.left is None
    assert root.right.left.right is None

    assert create_tree([]) is None


def test_creat_list():
    root = create_tree([1, 2, 3, 4, 5, 6])
    result = create_list(root)

    assert result == [1, 2, 3, 4, 5, 6]

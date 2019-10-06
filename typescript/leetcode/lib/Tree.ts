export interface Tree<T> {
  val: T
  left: Tree<T> | null
  right: Tree<T> | null
}

export function createTree<T>(
  values: T[],
  root: Tree<T> | null = null,
  index: number = 0
): Tree<T> | null {
  if (index < values.length) {
    root = { val: values[index], left: null, right: null }
    root.left = createTree(values, root.left, 2 * index + 1)
    root.right = createTree(values, root.right, 2 * index + 2)
  }

  return root
}

export function toArray<T>(
  tree: Tree<T> | null,
  values: T[] = [],
  index: number = 0
): T[] {
  if (tree != null) {
    values[index] = tree.val
    toArray(tree.left, values, 2 * index + 1)
    toArray(tree.right, values, 2 * index + 2)
  }

  return values
}

import { TreeNode } from "../lib/Tree"

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
export function rangeSumBST(
  root: TreeNode<number>,
  L: number,
  R: number
): number {
  // DFS with callstack
  function sum(node: TreeNode<number> | null): number {
    if (node == null) {
      return 0
    }

    let val = node.val
    if (val > R) {
      val = 0
    } else if (val < L) {
      val = 0
    }

    return val + sum(node.left) + sum(node.right)
  }

  return sum(root)
}

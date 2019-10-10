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
  function sum(node: TreeNode<number> | null): number {
    if (node == null) {
      return 0
    }

    let val = node.val
    let left = 0
    let right = 0

    if (val > L) {
      left = sum(node.left)
    }

    if (val < R) {
      right = sum(node.right)
    }

    if (val > R || val < L) {
      val = 0
    }

    return val + left + right
  }

  return sum(root)
}

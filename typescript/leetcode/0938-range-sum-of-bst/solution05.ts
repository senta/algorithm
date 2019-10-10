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
  root: TreeNode<number> | null,
  L: number,
  R: number
): number {
  if (root == null) {
    return 0
  }

  let val = root.val
  if (root.val > R || root.val < L) {
    val = 0
  }

  return val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
}

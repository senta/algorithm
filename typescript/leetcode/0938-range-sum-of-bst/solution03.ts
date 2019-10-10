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
  // BFS
  let total = 0
  const queue = [root]

  while (queue.length > 0) {
    const el = queue.shift() as TreeNode<number>
    if (el.val >= L && el.val <= R) {
      total += el.val
    }
    if (el.left) {
      queue.push(el.left)
    }
    if (el.right) {
      queue.push(el.right)
    }
  }

  return total
}

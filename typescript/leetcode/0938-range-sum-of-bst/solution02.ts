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
  // DFS with stack? Not sure if it's DFS
  let total = 0
  const stack = [root]

  while (stack.length > 0) {
    const el = stack.pop() as TreeNode<number>

    if (el.val >= L && el.val <= R) {
      total += el.val
    }
    if (el.right) {
      stack.push(el.right)
    }
    if (el.left) {
      stack.push(el.left)
    }
  }

  return total
}

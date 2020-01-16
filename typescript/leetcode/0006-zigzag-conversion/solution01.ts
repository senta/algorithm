/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export function convert(s: string, numRows: number): string {
  // https://leetcode.com/problems/zigzag-conversion/discuss/3404/Python-O(n)-Solution-in-96ms-(99.43)
  const table = (new Array(numRows)).fill("")

  if (numRows === 1 || s.length < numRows) {
    return s
  }

  let row = 0
  let step = 1
  for (let i = 0; i < s.length; i++) {
    table[row] += s[i]

    if (row === 0) {
      step = 1
    } else if (row === numRows - 1) {
      step = -1
    }

    row += step
  }

  return table.join("")
}

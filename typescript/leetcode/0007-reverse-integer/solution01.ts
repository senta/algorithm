/**
 * @param {number} x
 * @return {number}
 */
export function reverse(x: number): number {
  const multiply = x < 0 ? -1 : 1
  x *= multiply

  let reversed = 0
  while (x > 0) {
    reversed = reversed * 10 + (x % 10)
    if (reversed > MAX_INTEGER32) {
      return 0
    }
    x = Math.floor(x / 10)
  }

  return reversed * multiply
}

const MAX_INTEGER32 = 0x7fffffff // Math.pow(2, 31)

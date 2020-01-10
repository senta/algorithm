const WHITE_SPACE = ' '
const INT_MIN = -2147483648
const INT_MAX = 2147483647

const CHAR_PLUS = 43
const CHAR_MINUS = 45
const CHAR_0 = 48
const CHAR_9 = 57

/**
 * @param {string} str
 * @return {number}
 */
export function myAtoi(str: string): number {
  let n = 0
  let factor = 1

  let index = 0
  while (str[index] === WHITE_SPACE) {
    index++
  }
  
  const firstLetter = str.charCodeAt(index)
  if (firstLetter === CHAR_MINUS) {
    factor = -1
    index += 1
  } else if (firstLetter === CHAR_PLUS) {
    index += 1
  } else if (firstLetter < CHAR_0 || firstLetter > CHAR_9) {
    // if the first non-whitespace character is non-numeric, nor -/+ sign, it'invalid string
    return 0
  }

  for (let i = index; i < str.length; i ++) {
    // stop the loop if the letter is not numeric
    const char = str[i].charCodeAt(0)
    if (char < CHAR_0 || char > CHAR_9) {
      break
    }

    // adjust digits
    n *= 10

    // add the current number as the 1st digit
    n += char - CHAR_0
  }

  // Ensure the number is 32bit
  return Math.max(Math.min(n * factor, INT_MAX), INT_MIN)
}

const ROMAN: {[key: string]: number} = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
export function romanToInt(s: string): number {
  let num = 0
  let index = 0

  while (index < s.length) {
    const currentValue = ROMAN[s[index]]
    const nextValue = ROMAN[s[index + 1]] || 0

    if (currentValue < nextValue) {
      num += nextValue - currentValue
      index++
    } else {
      num += currentValue
    }

    index++
  }

  return num
}

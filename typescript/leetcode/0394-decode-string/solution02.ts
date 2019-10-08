/**
 * @param {string} s
 * @return {string}
 */
export function decodeString(s: string): string {
  let beginning = 0
  let compiled = ""
  let level = 0
  let repeatNumber = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const code = char.charCodeAt(0)

    if (char === "[") {
      if (level == 0) {
        beginning = i + 1
      }
      level += 1
    } else if (char === "]") {
      level -= 1
      if (level == 0) {
        const subsequence = s.substr(beginning, i - beginning)
        compiled += decodeString(subsequence).repeat(repeatNumber)
        repeatNumber = 0
      }
    } else if (level == 0) {
      if (code >= CHARCODE_ZERO && code <= CHARCODE_NINE) {
        repeatNumber = repeatNumber * 10 + (code - CHARCODE_ZERO)
      } else {
        compiled += char
      }
    }
  }

  return compiled
}

const CHARCODE_ZERO = 48 // '0'.charCodeAt(0)
const CHARCODE_NINE = 57 // '9'.charCodeAt(0)

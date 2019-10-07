/**
 * @param {string} s
 * @return {string}
 */
export function decodeString(s: string): string {
  const stack: StackNode[] = []
  let currentNumber = 0
  let currentString = ""

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const code = char.charCodeAt(0)

    if (char === "[") {
      stack.push([currentNumber, currentString])
      currentNumber = 0
      currentString = ""
    } else if (char === "]") {
      const [prevNumber, prevString] = stack.pop()!
      currentString = prevString + currentString.repeat(prevNumber)
    } else if (code >= CHARCODE_ZERO && code <= CHARCODE_NINE) {
      currentNumber = currentNumber * 10 + (code - CHARCODE_ZERO)
    } else {
      currentString += char
    }
  }

  return currentString
}

const CHARCODE_ZERO = 48 // '0'.charCodeAt(0)
const CHARCODE_NINE = 57 // '9'.charCodeAt(0)

type StackNode = [number, string]

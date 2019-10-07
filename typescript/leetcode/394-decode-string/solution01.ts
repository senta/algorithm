/**
 * @param {string} s
 * @return {string}
 */
export function decodeString(s: string): string {
  const beginning = new Map<number, number>()
  let compiled = ""
  let level = 0
  let readingNumbers = false

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char.match(/\d/)) {
      if (!readingNumbers) {
        beginning.set(level + 1, i)
      }
      readingNumbers = true
    } else if (char === "[") {
      level += 1
      readingNumbers = false
    } else if (char === "]") {
      level -= 1
      if (level == 0) {
        const startPos = beginning.get(level + 1) as number
        const subsequence = s.substring(startPos, i + 1)
        const matches = subsequence.match(/(^\d+)\[(.+)]/)
        if (matches) {
          compiled += decodeString(matches[2]).repeat(parseInt(matches[1]))
        }
      }
    } else if (level == 0) {
      compiled += char
    }
  }

  return compiled
}

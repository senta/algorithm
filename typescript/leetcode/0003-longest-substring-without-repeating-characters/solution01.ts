/**
 * @param {string} s
 * @return {number}
 */
export function lengthOfLongestSubstring(s: string): number {
  let maxlen = 0
  let sequence = ""

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (sequence.indexOf(c) !== -1) {
      maxlen = Math.max(maxlen, sequence.length)

      const index = sequence.indexOf(c)
      sequence = sequence.substring(index + 1) + c
    } else {
      sequence += c
    }
  }

  return Math.max(maxlen, sequence.length)
}

/**
 * @param {string[]} strs
 * @return {string}
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return ""
  }

  let common = ""
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]
    for (let j = 1; j < strs.length; j++) {
      if (char != strs[j][i]) {
        return common
      }
    }
    common += char
  }

  return common
}

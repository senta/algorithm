/**
 * Use binary search - https://leetcode.com/articles/longest-common-prefix/#approach-4-binary-search
 *
 * @param {string[]} strs
 * @return {string}
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return ""
  }

  const minLength = strs.reduce((min, x) => Math.min(x.length, min), Infinity)
  let lo = 1
  let hi = minLength

  while (lo <= hi) {
    const middle = Math.floor((lo + hi) / 2)

    if (isCommon(strs, middle)) {
      lo = middle + 1
    } else {
      hi = middle - 1
    }
  }

  return strs[0].substr(0, Math.floor((lo + hi) / 2))
}

function isCommon(strs: string[], len: number): boolean {
  let subset = strs[0].substr(0, len)
  for (let i = 0; i < strs.length; i++) {
    if (subset !== strs[i].substr(0, len)) {
      return false
    }
  }

  return true
}

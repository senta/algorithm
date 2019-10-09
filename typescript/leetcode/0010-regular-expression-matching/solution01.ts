/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
export function isMatch(s: string, p: string): boolean {
  let i = 0
  let j = 0

  while (j < p.length) {
    // console.log(`i = ${i}: ${s[i]}, j = ${j}: ${p[j]}`)
    if (s[i] === p[j]) {
      i++
      j++
    } else if (p[j] === ".") {
      i++
      j++
    } else if (p[j] === "*") {
      while (s[i] && (s[i] === p[j - 1] || p[j - 1] === ".")) {
        i++
      }

      let n = 1
      while (p[j + n + 1] && (p[j - 1] === p[j + n] || p[j - 1] === ".")) {
        n++
      }
      j += n
    } else if (p[j + 1] === "*" && s[i]) {
      j++
    } else {
      return false
    }
  }

  // console.log({ p, s, slen: s.length, plen: p.length, i, j })
  return s.length === i && p.length === j
}

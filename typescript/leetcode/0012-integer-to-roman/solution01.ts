const ROMAN = [
  [1000, "M"],
  [900, "CM"],
  [500 , "D"],
  [400 , "CD"],
  [100 , "C"],
  [90  , "XC"],
  [50  , "L"],
  [40  , "XL"],
  [10  , "X"],
  [9   , "IX"],
  [5   , "V"],
  [4   , "IV"],
  [1   , "I"],
] as const


/**
 * @param {number} num
 * @return {string}
 */
export function intToRoman(num: number): string {
  let result = ""

  for (let i = 0; i < ROMAN.length; i++) {
    const [value, roman] = ROMAN[i]

    if (num < value) {
      continue
    }

    const r = Math.floor(num / value)
    result += roman.repeat(r)
    num = num - value * r
  }

  return result
}

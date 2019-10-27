export function gcd(a: number, b: number): number {
  const min = Math.min(a, b)
  const max = Math.max(a, b)

  // base case
  if (max % min === 0) {
    return min
  }

  return gcd(min, max % min)
}

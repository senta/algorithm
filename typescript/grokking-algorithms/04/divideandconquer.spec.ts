import { gcd } from "./divideandconquer"

describe("gcd", () => {
  it("returns greatest common divisor", () => {
    expect(gcd(1680, 640)).toBe(80)
  })

  it("returns greatest common divisor", () => {
    expect(gcd(1680, 641)).toBe(1)
  })
})

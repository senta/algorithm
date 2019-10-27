export function binalysearch(numbers: number[], subject: number): number {
  let lo = 0
  let hi = numbers.length - 1
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2)
    let guess = numbers[mid]

    if (guess === subject) {
      return mid
    }

    if (guess < subject) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }

  return -1
}

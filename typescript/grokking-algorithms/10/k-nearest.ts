function distance(a: number[], b: number[]): number {
  let total = 0
  for (let i = 0; i < a.length; i++) {
    total += Math.pow(a[i] - b[i], 2)
  }

  return Math.sqrt(total)
}

console.log(distance([3, 4, 4, 1, 4], [4, 3, 5, 1, 5]))
console.log(distance([3, 4, 4, 1, 4], [2, 5, 1, 3, 1]))
console.log(distance([4, 3, 5, 1, 5], [2, 5, 1, 3, 1]))

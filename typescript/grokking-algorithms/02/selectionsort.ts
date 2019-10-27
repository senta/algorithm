export function selectionsort(numbers: number[]): number[] {
  const sorted: number[] = []
  while (numbers.length) {
    const index = lowest(numbers)
    const value = numbers.splice(index, 1)

    sorted.push(value[0])
  }

  return sorted
}

export function lowest(numbers: number[]): number {
  if (numbers.length < 1) {
    return -1
  }

  let lowest = numbers[0]
  let index = 0

  for (let i = 1; i < numbers.length; i++) {
    if (lowest > numbers[i]) {
      lowest = numbers[i]
      index = i
    }
  }

  return index
}

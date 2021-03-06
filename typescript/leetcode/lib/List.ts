export interface List<T> {
  val: T
  next: List<T> | null
}

export function createList<T>(values: T[]): List<T> | null {
  if (values.length === 0) {
    return null
  }

  let node: List<T> | null = null

  for (let i = values.length - 1; i >= 0; i--) {
    const prev: List<T> = { val: values[i], next: null }
    prev.next = node
    node = prev
  }

  return node
}

export function toArray<T>(head: List<T> | null): T[] {
  const values = []
  while (head) {
    values.push(head.val)
    head = head.next
  }
  return values
}

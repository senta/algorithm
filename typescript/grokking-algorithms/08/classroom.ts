interface Schedule {
  class: string
  start: number
  end: number
}

export function classroom(scheduls: Schedule[]): string[] {
  const classes: string[] = []

  let time = 0
  while (true) {
    let soon: Schedule | null = null

    for (let i = 0; i < scheduls.length; i++) {
      const one = scheduls[i]
      if (one.start < time) {
        continue
      }
      if (!soon || soon.start > one.start) {
        soon = one
      }
    }

    if (!soon) {
      break
    }

    classes.push(soon.class)
    time = soon.end
  }

  return classes
}

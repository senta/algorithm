import { classroom } from "./classroom"

describe("classroom", () => {
  const schedule = [
    { class: "ART", start: 900, end: 1000 },
    { class: "ENG", start: 930, end: 1030 },
    { class: "MATH", start: 1000, end: 1100 },
    { class: "CS", start: 1030, end: 1130 },
    { class: "MUSIC", start: 1100, end: 1200 }
  ]

  it("picks classrooms as many as possible", () => {
    const result = classroom(schedule)
    expect(result).toEqual(["ART", "MATH", "MUSIC"])
  })
})

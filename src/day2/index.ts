import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  const lines = input.split("\n")

  const splitArray = lines.map((singleLine) => singleLine.split(/[-\s]/))

  let validPasswords: number = 0

  splitArray.forEach((singleLine) => {
    let lower: number = Number.parseInt(singleLine[0])
    let upper: number = Number.parseInt(singleLine[1])
    let letter: string = singleLine[2][0]
    let password: string = singleLine[3]
    const regex = new RegExp(`${letter}`, "g")

    const match = password.matchAll(regex)

    let total: number = Array.from(match).length

    if (total >= lower && total <= upper) {
      validPasswords++
    }
  })
  return validPasswords
}

const goB = (input) => {
  return
}

/* Tests */

// test()

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)

import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const lines = input.split(/\n/)

const splitArray = lines.map((singleLine) => singleLine.split(/[-\s:]+/))

const goA = (input) => {
  let validPasswords: number = 0

  splitArray.forEach((singleLine) => {
    let lower: number = Number.parseInt(singleLine[0])
    let upper: number = Number.parseInt(singleLine[1])
    let letter: string = singleLine[2]
    let password: string = singleLine[3]
    const letterPattern = new RegExp(`${letter}`, "g")
    const iterator = password.matchAll(letterPattern)
    let total: number = Array.from(iterator).length

    if (total >= lower && total <= upper) {
      validPasswords++
    }
  })
  return validPasswords
}

const goB = (input) => {
  let validPasswords: number = 0

  splitArray.forEach((singleLine) => {
    let positionOne: number = Number.parseInt(singleLine[0])
    let positionTwo: number = Number.parseInt(singleLine[1])
    let letter: string = singleLine[2]
    let password: string = singleLine[3]
  
    if (password[positionOne-1] === letter && password[positionTwo-1] !== letter) {
      validPasswords++
    } else if (password[positionOne-1] !== letter && password[positionTwo-1] === letter) {
      validPasswords++
    }
  })
  return validPasswords
}

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)

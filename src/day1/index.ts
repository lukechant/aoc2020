import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())
  .split("\n")
  .map((input) => Number(input))

let firstNumber: number
let secondNumber: number
let thirdNumber: number

const goA = (input) => {
  for (let indexA = 0; indexA < input.length; indexA++) {
    for (let indexB = indexA + 1; indexB < input.length; indexB++) {
      if (input[indexA] + input[indexB] == 2020) {
        firstNumber = input[indexA]
        secondNumber = input[indexB]
      }
    }
  }
  console.log(firstNumber)
  console.log(secondNumber)
  return firstNumber * secondNumber;
}

const goB = (input) => {
  for (let indexA = 0; indexA < input.length; indexA++) {
    for (let indexB = indexA + 1; indexB < input.length; indexB++) {
      for (let indexC = indexB + 1; indexC < input.length; indexC++) {
        if (input[indexA] + input[indexB] + input[indexC] == 2020) {
          firstNumber = input[indexA]
          secondNumber = input[indexB]
          thirdNumber = input[indexC]
        }
      }
    }
  }
  console.log(firstNumber)
  console.log(secondNumber)
  console.log(thirdNumber)
  return firstNumber * secondNumber * thirdNumber
}

// const map1 = input.map((element, index) => element[index] + element[index++] );
// const testA = input.forEach(input.reduce((prev, curr) => { if(prev + curr === 2020) {
//   return prev*curr; }}));
// const test3 = input.forEach((element) => {
//   return element * 2;
// });

// console.log(test3);
/* Tests */

// test()

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
// console.log(testA)

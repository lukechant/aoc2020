import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput()).split('\n');

let row = 0;
let trees = 0;

const goA = (input) => {
  for(let column = 0; column < input.length; column++) {
    row += 3;
    if (row > input[column].length) {
      row = input[column].length - 3;
    }
    if (input[column].charAt(row)=='#') {
      trees++;
    }
  }
  return trees;
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

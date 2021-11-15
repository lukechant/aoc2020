import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput()).split('\n');

const treeLooper = (input, columnIncrement, rowIncrement) => {
  let trees = 0;
  let column = 0;
  let row = 0 + rowIncrement;
  
  for(row; row < input.length; row += rowIncrement) {
    column += columnIncrement;
    if (column > input[row].length -1 ) {
      column = column - input[row].length
    }

    if (input[row].charAt([column])=='#') {
      trees++;
    }
  }
  return trees;
}

const goA = (input) => {
  return treeLooper(input, 3, 1)
}

const goB = (input) => {
  let slopeA = treeLooper(input, 1, 1)
  let slopeB = treeLooper(input, 3, 1)
  let slopeC = treeLooper(input, 5, 1)
  let slopeD = treeLooper(input, 7, 1)
  let slopeE = treeLooper(input, 1, 2)
  return slopeA * slopeB * slopeC * slopeD * slopeE
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

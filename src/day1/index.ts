import { test, readInput } from "../utils/index"

const prepareInput = (rawInput: string) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  const arrayOfInputs = input.split("\n");
  const arrayOfNumbers = arrayOfInputs.map(input => Number(input));
  let firstNumber:number;
  let secondNumber:number;
  for(let indexA = 0; indexA < arrayOfNumbers.length; indexA++){
    for(let indexB = indexA + 1; indexB < arrayOfNumbers.length; indexB++){
       if(arrayOfNumbers[indexA] + arrayOfNumbers[indexB] == 2020){
        firstNumber = arrayOfNumbers[indexA];
        secondNumber = arrayOfNumbers[indexB];
       }
    }
  }
  console.log(firstNumber);
  console.log(secondNumber);
  return firstNumber * secondNumber;
}

const goB = (input) => {
  const arrayOfInputs = input.split("\n");
  const arrayOfNumbers = arrayOfInputs.map(input => Number(input));
  let firstNumber:number;
  let secondNumber:number;
  let thirdNumber:number;
  for(let indexA = 0; indexA < arrayOfNumbers.length; indexA++){
    for(let indexB = indexA + 1; indexB < arrayOfNumbers.length; indexB++){
      for(let indexC = indexB + 1; indexC < arrayOfNumbers.length; indexC++){
       if(arrayOfNumbers[indexA] + arrayOfNumbers[indexB] + arrayOfNumbers[indexC] == 2020){
        firstNumber = arrayOfNumbers[indexA];
        secondNumber = arrayOfNumbers[indexB];
        thirdNumber = arrayOfNumbers[indexC];
       }
    }
  }
  }
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(thirdNumber);
  return firstNumber * secondNumber * thirdNumber;
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

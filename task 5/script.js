// 1. Exponentiation Operator (**)

let number = 3; // Base value changed to 3
let power = 4; // Exponent value changed to 4
let calculation = number ** power; // 3^4 = 81
console.log("Exponentiation Result:", calculation); // Output: 81


// 2. ES6 Modules

const calculator = {
  multiply: (a, b) => a * b, // Added multiply function
  divide: (a, b) => a / b,   // Added divide function
};

console.log("Multiply Function Result:", calculator.multiply(6, 2)); // Output: 12
console.log("Divide Function Result:", calculator.divide(10, 2)); // Output: 5

// 3. JavaScript Generators

// Generator function
function* evenNumberGenerator() {
  let num = 0;
  while (num < 10) { // Changed condition to generate even numbers less than 10
    yield num;
    num += 2; // Increment by 2 for even numbers
  }
}

// Using the generator
const evenGen = evenNumberGenerator();
console.log("Even Number Generator Values:");
console.log(evenGen.next().value); // Output: 0
console.log(evenGen.next().value); // Output: 2
console.log(evenGen.next().value); // Output: 4
console.log(evenGen.next().value); // Output: 6
console.log(evenGen.next().value); // Output: 8
console.log(evenGen.next().value); // Output: undefined 

// Infinite Generator
function* fibonacciSequence() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b]; // Generate Fibonacci sequence
  }
}

const fibonacciGen = fibonacciSequence();
console.log("Fibonacci Sequence Values:");
console.log(fibonacciGen.next().value); // Output: 0
console.log(fibonacciGen.next().value); // Output: 1
console.log(fibonacciGen.next().value); // Output: 1
console.log(fibonacciGen.next().value); // Output: 2
console.log(fibonacciGen.next().value); // Output: 3
console.log(fibonacciGen.next().value); // Output: 5

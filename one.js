// Parameters (num1, num2): Act as placeholder variables for the numbers passed into the function.
function calculateSum(num1, num2) {
  // return: Sends the result of num1 + num2 back to wherever the function was called.
  return num1 + num2;
}

// Arguments (e.g., 2, 5): The actual values passed into the function call.
console.log(calculateSum(2, 5));     // Outputs: 7
console.log(calculateSum(10, 10));   // Outputs: 20
console.log(calculateSum(5, 5));     // Outputs: 10

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5)); // Outputs: 17
console.log(calculateDifference(12, 1)); // Outputs: 11
console.log(calculateDifference(17, 9)); // Outputs: 8

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5)); // Outputs: 65

function calculateQuotient(num1, num2) {
  // Ternary Operator (condition ? valueIfTrue : valueIfFalse):
  // In JavaScript, dividing a number by 0 normally returns 'Infinity' instead of throwing an error.
  // This shorthand if-else checks if 'num2' is strictly equal to 0:
  // - If true, it returns the warning string "Error: Division by zero".
  // - If false, it performs the division (num1 / num2).
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11)); // Outputs: 0.6363636363636364
console.log(calculateQuotient(3, 0));  // Outputs: "Error: Division by zero"

function calculateSquare(num) {
  // Exponentiation Operator (**): Raises the base number (num) to the power of the exponent (2).
  // Equivalent to num * num or Math.pow(num, 2).
  return num ** 2;
}

console.log(calculateSquare(2)); // Outputs: 4
console.log(calculateSquare(9)); // Outputs: 81

function calculateSquareRoot(num) {
  // Math.sqrt(): Built-in Math method that calculates the square root of a number.
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));  // Outputs: 5
console.log(calculateSquareRoot(100)); // Outputs: 10

// 1 & 2. Define the 'convertCtoF' function with a single parameter ('celsius').
function convertCtoF(celsius) {
  // 3. Calculate and return the Fahrenheit value directly:
  // - JavaScript evaluates (9 / 5) first due to parentheses, resulting in 1.8.
  // - Next, it multiplies 'celsius' by 1.8.
  // - Finally, it adds 32 to the result and returns the final number.
  return celsius * (9 / 5) + 32;
}

// Test Cases:
console.log(convertCtoF(0));   // Outputs: 32 (0 * 1.8 + 32)
console.log(convertCtoF(-30)); // Outputs: -22 (-30 * 1.8 + 32)
console.log(convertCtoF(-10)); // Outputs: 14 (-10 * 1.8 + 32)
console.log(convertCtoF(20));  // Outputs: 68 (20 * 1.8 + 32)
console.log(convertCtoF(30));  // Outputs: 86 (30 * 1.8 + 32)

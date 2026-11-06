// Alternative Approach (Explicit Value Check)

// If you prefer checking the exact values directly without using typeof, you can also use the logical OR (||) operator with strict equality:
function booWho(value) {
  // Returns true ONLY if 'value' is strictly true OR strictly false.
  return value === true || value === false;
}
console.log(booWho(true));      // Outputs: true (boolean primitive)
console.log(booWho(false));     // Outputs: true (boolean primitive)
console.log(booWho("true"));    // Outputs: false (typeof "true" is "string", not "boolean")
console.log(booWho(1));         // Outputs: false (typeof 1 is "number")
console.log(booWho([1, 2, 3])); // Outputs: false (typeof [1, 2, 3] is "object")

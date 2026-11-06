// 1. Define the 'booWho' function that accepts a single parameter ('value').
function booWho(value) {
  // 2 & 3. Check the data type of 'value':
  // - The 'typeof' operator returns a string indicating the type of the operand (e.g., "boolean", "string", "number").
  // - Comparing it to "boolean" with strict equality (===) automatically evaluates to 'true' 
  //   if 'value' is true or false, and 'false' for every other data type.
  return typeof value === "boolean";
}

// Example Test Cases:
console.log(booWho(true));      // Outputs: true (boolean primitive)
console.log(booWho(false));     // Outputs: true (boolean primitive)
console.log(booWho("true"));    // Outputs: false (typeof "true" is "string", not "boolean")
console.log(booWho(1));         // Outputs: false (typeof 1 is "number")
console.log(booWho([1, 2, 3])); // Outputs: false (typeof [1, 2, 3] is "object")

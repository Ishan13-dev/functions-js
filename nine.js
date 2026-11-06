// 1. Define 'confirmEnding' with two parameters: 'str' (main string) and 'target' (ending to check).
function confirmEnding(str, target) {
  // 2 & 3. Extract the end of 'str' using .slice() with a negative index:
  // - Passing a negative number (-target.length) into .slice() tells JavaScript to count 
  //   backward from the very end of 'str'.
  // - For example, if 'target' is "same" (length 4), str.slice(-4) grabs the last 4 characters of 'str'.
  // - Finally, strict equality (===) checks if those extracted characters exactly match 'target'.
  return str.slice(-target.length) === target;
}

// Test Cases:
console.log(confirmEnding("Bastian", "n"));               // Outputs: true
console.log(confirmEnding("Congratulation", "on"));       // Outputs: true
console.log(confirmEnding("Connor", "n"));                // Outputs: false
console.log(confirmEnding("He has to give me a new name", "name")); // Outputs: true
console.log(confirmEnding("Open sesame", "same"));        // Outputs: true
console.log(confirmEnding("Open sesame", "sage"));        // Outputs: false
console.log(confirmEnding("Abstraction", "action"));      // Outputs: true

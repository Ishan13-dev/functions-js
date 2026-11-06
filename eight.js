// 1. Define 'truncateString' accepting a string ('str') and a number ('num').
function truncateString(str, num) {
  // 2. Check if the total number of characters in 'str' is strictly greater than 'num'.
  if (str.length > num) {
    // .slice(0, num) extracts characters starting at index 0 up to (but not including) index 'num'.
    // Because indexing starts at 0, slicing from 0 to 'num' gives us exactly 'num' characters!
    return str.slice(0, num) + "...";
  } else {
    // 3. If the string's length is equal to or less than 'num', return it untouched.
    return str;
  }
}

// Test Cases:
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); 
// Outputs: "A-tisket..."

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); 
// Outputs: "Peter Piper..."

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); 
// Outputs: "A-tisket a-tasket A green and yellow basket"

console.log(truncateString("A-", 1)); 
// Outputs: "A..."

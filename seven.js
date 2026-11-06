// 1. Define the 'isLeapYear' function that takes a numeric 'year' parameter.
function isLeapYear(year) {
  // 3, 4, & 5. Check leap year rules using the remainder operator (%):
  // - (year % 4 === 0 && year % 100 !== 0): Divisible by 4, AND NOT a century year (divisible by 100).
  // - || (year % 400 === 0): OR it IS divisible by 400 (which overrides the century exception).
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}

// 2. Declare a 'year' variable outside the function with a year to test.
const year = 2024;

// 6. Declare 'result' and assign it the return value of calling 'isLeapYear(year)'.
const result = isLeapYear(year);

// 7. Log the 'result' variable to the console.
console.log(result); // Outputs: "2024 is a leap year."

// Additional Test Cases:
console.log(isLeapYear(2000)); // Outputs: "2000 is a leap year."
console.log(isLeapYear(1900)); // Outputs: "1900 is not a leap year."
console.log(isLeapYear(1901)); // Outputs: "1901 is not a leap year."

console.log("Using Ternary Operator");
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
} 
console.log(isLeapYear(2001));

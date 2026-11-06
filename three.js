// 1. Define the 'maskEmail' function that takes 'email' as a parameter.
function maskEmail(email) {
  // Find the exact position (index) of the "@" symbol.
  // Because string indices start at 0, this index also equals the total length of the username!
  const atIndex = email.indexOf("@");

  // Grab the very first character of the email at index 0.
  const firstChar = email[0];

  // Grab the last character of the username (located right before the "@" symbol).
  const lastChar = email[atIndex - 1];

  // Calculate how many middle characters need to be hidden:
  // Subtract 2 from 'atIndex' (one for firstChar, one for lastChar), 
  // then use .repeat() to generate that exact number of asterisks.
  const maskedMiddle = "*".repeat(atIndex - 2);

  // Use .slice(atIndex) to extract everything from the "@" symbol to the end of the string.
  const domain = email.slice(atIndex);

  // 2. Combine all parts back together and return the final masked email.
  return firstChar + maskedMiddle + lastChar + domain;
}

// 3. Outside the function, declare the 'email' variable with a valid email address.
const email = "apple.pie@example.com";

// 4. Call 'maskEmail' with 'email' and log the result to the console.
console.log(maskEmail(email)); // Outputs: "a*******e@example.com"

// Additional Test Cases:
console.log(maskEmail("freecodecamp@example.com")); // Outputs: "f**********p@example.com"
console.log(maskEmail("info@test.dev"));            // Outputs: "i**o@test.dev"
console.log(maskEmail("user@domain.org"));          // Outputs: "u**r@domain.org"

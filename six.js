// 1. Declare a global variable 'count' using 'let' so it persists across multiple function calls.
let count = 0;

// 2 & 3. Define 'cardCounter' with a single 'card' parameter (number or string).
function cardCounter(card) {
  // 4, 5, 6, & 7. Update the global 'count' based on the card value.
  // Low cards (2 through 6) increase the count by 1.
  if (card >= 2 && card <= 6) {
    count++;
  } 
  // High cards (10, "J", "Q", "K", "A") decrease the count by 1.
  // We use the logical OR (||) operator to check if 'card' matches any of these values.
  // Note: Cards 7, 8, and 9 are ignored because the count remains unchanged for them.
  else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count--;
  }

  // 8, 9, & 10. Determine the player's action based on the updated 'count'
  // and return the count and decision separated by a single space.
  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

// Example Test Sequence (simulating Test #7: 3, 7, "Q", 8, "A"):
cardCounter(3);                 // count becomes 1
cardCounter(7);                 // count stays 1
cardCounter("Q");               // count becomes 0
cardCounter(8);                 // count stays 0
console.log(cardCounter("A"));  // count becomes -1 -> Outputs: "-1 Hold"

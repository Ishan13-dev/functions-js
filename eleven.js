let count = 0;

function cardCounter(card) {
  switch (card) {
    // Fall-through cases: If 'card' matches any of 2-6, it increments 'count' and breaks.
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    // If 'card' matches 10 or any face card/Ace, it decrements 'count' and breaks.
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  // Ternary operator shorthand to return the formatted string.
  return count > 0 ? `${count} Bet` : `${count} Hold`;
}

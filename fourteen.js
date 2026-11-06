// USING POSITIVE INDEX
function confirmEnding(str, target) {
  // Subtracting target.length from str.length gives the exact starting index 
  // where the ending begins (e.g., for "Bastian" (7) and "n" (1): 7 - 1 = index 6).
  return str.slice(str.length - target.length) === target;
}

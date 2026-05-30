// 26_recursion.js
// Recursive function example: factorial

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log('5! =', factorial(5));
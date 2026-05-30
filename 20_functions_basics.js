// 20_functions_basics.js
// Function declaration and calling

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Learner'));

// Function with default param
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2));
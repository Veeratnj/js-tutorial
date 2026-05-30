// 21_function_expressions.js
// Function expressions assign a function to a variable

const add = function (a, b) {
  return a + b;
};

console.log('add(2,3)=', add(2, 3));

// Anonymous function passed as an argument
setTimeout(function () {
  console.log('Delayed message');
}, 100);
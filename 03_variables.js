// 03_variables.js
// Demonstrates var, let, and const

var x = 1; // function-scoped (older)
let y = 2; // block-scoped
const z = 3; // constant reference

console.log(x, y, z);

// Reassigning works for var/let but not const
y = 20;
// z = 30; // uncommenting would throw an error
console.log('after update:', x, y, z);
// 23_scope_hoisting.js
// Demonstrates block vs function scope and hoisting

function testScope() {
  console.log('hoistedVar before declaration:', hoistedVar); // undefined due to hoisting
  var hoistedVar = 'I am hoisted';

  // let/const are not hoisted the same way
  // console.log(blockScoped); // would throw ReferenceError
  let blockScoped = 'block';
  console.log(blockScoped);
}

testScope();
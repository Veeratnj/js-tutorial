// 10_logical_operators.js
// && (and), || (or), ! (not)

const a = true, b = false;
console.log('a && b =', a && b);
console.log('a || b =', a || b);
console.log('!a =', !a);

// Short-circuiting: returns value of operands
console.log(null || 'default');
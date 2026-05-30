// 77_symbol.js
// Symbols are unique identifiers

const s1 = Symbol('id');
const s2 = Symbol('id');
console.log(s1 === s2); // false

const obj = {};
obj[s1] = 123;
console.log('symbol property', obj[s1]);
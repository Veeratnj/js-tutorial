// 05_data_types.js
// Overview of primitive and reference types

// Primitives: number, string, boolean, null, undefined, bigint, symbol
const n = 42;
const s = 'hello';
const b = true;
const nothing = null;
let notAssigned;

// Reference: objects and arrays
const arr = [1, 2, 3];
const obj = { name: 'JS' };

console.log(typeof n, typeof s, typeof b, typeof nothing, typeof notAssigned);
console.log(Array.isArray(arr), obj.name);
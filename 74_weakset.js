// 74_weakset.js
// WeakSet stores weakly-held objects

const ws = new WeakSet();
let obj = { a: 1 };
ws.add(obj);
console.log('contains?', ws.has(obj));
obj = null; // eligible for GC

console.log('WeakSet stores object references without preventing GC');
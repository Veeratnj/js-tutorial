// 73_weakmap.js
// WeakMap holds weak references to object keys (no enumeration)

const wm = new WeakMap();
let key = {};
wm.set(key, 'meta');
console.log('has key?', wm.has(key));
key = null; // now eligible for GC; can't reliably observe removal

console.log('WeakMap usage example');
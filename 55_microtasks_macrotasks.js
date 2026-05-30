// 55_microtasks_macrotasks.js
// Microtasks (Promises) run before macrotasks (setTimeout)

console.log('start');
setTimeout(() => console.log('macrotask'), 0);
Promise.resolve().then(() => console.log('microtask'));
console.log('end');

// Order: start, end, microtask, macrotask
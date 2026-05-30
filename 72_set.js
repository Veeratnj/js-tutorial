// 72_set.js
// Set stores unique values

const s = new Set([1, 2, 2, 3]);
console.log([...s]);
s.add(4);
console.log('size =', s.size);
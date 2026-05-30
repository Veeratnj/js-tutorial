// 71_map.js
// Map stores key-value pairs and preserves insertion order

const m = new Map();
m.set('a', 1);
m.set({}, 2);
console.log('has a?', m.has('a'));
for (const [k, v] of m) console.log(k, v);
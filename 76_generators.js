// 76_generators.js
// Generator functions produce a sequence of values

function* range(n) {
  for (let i = 0; i < n; i++) yield i;
}

for (const i of range(3)) console.log('gen', i);
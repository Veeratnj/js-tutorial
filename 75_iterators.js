// 75_iterators.js
// Custom iterator example

const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const v of iterable) console.log(v);
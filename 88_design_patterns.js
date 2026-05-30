// 88_design_patterns.js
// Simple module (Revealing Module) pattern example

const Counter = (function () {
  let count = 0;
  return {
    inc() { count++; },
    get() { return count; }
  };
})();

Counter.inc();
console.log('Counter =', Counter.get());
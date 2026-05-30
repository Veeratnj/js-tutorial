// 85_debugging.js
// Debugging techniques: console, debugger, IDE breakpoints

function compute(x) {
  const y = x * 2;
  debugger; // pauses execution in debugger-enabled environment
  return y + 1;
}

console.log('result', compute(5));
// 86_performance_optimization.js
// Small tips: avoid repeated DOM queries, minimize allocations

// Example: cache array length instead of reading inside loop
const arr = new Array(100000).fill(0);
let sum = 0;
for (let i = 0, len = arr.length; i < len; i++) sum += arr[i];
console.log('sum', sum);

console.log('Optimize hotspots and measure with profiler.');
// 87_memory_management.js
// JS uses garbage collection; avoid keeping references to large objects

function leakExample() {
  const big = new Array(1e6).fill('*');
  return () => console.log(big.length); // closure keeps `big` alive
}

const hold = leakExample();
// If we drop `hold`, `big` becomes eligible for GC
console.log('closure created, big kept alive until hold is cleared');
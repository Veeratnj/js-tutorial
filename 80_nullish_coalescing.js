// 80_nullish_coalescing.js
// Nullish coalescing operator (??) treats null/undefined as empty

const a = null;
const b = a ?? 'default';
console.log(b); // 'default'

const c = 0 ?? 5; // 0 is not nullish
console.log(c); // 0
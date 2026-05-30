// 04_constants.js
// Using `const` for values that shouldn't change

const DAYS_IN_WEEK = 7;
const CONFIG = { env: 'dev' };

console.log('Days:', DAYS_IN_WEEK);

// You can mutate object properties but not reassign the binding
CONFIG.env = 'production';
console.log('Config:', CONFIG);
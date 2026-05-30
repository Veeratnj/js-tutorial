// 84_jest_testing.js
// Simple function and how you'd test it with Jest

function add(a, b) { return a + b; }

module.exports = { add };

// Example test (in __tests__/add.test.js):
// const { add } = require('../84_jest_testing');
// test('adds numbers', () => expect(add(1,2)).toBe(3));

console.log('Exported add() — write tests using Jest as shown in comments.');
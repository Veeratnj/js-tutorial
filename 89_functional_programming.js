// 89_functional_programming.js
// Small functional composition example

const add = x => y => x + y;
const inc = add(1);
console.log(inc(4));

const nums = [1,2,3];
const doubled = nums.map(n => n * 2).filter(n => n > 2);
console.log(doubled);
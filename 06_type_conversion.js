// 06_type_conversion.js
// Explicit and implicit conversions

console.log('5' + 3); // '53' (string concatenation)
console.log('5' - 3); // 2 (string converted to number)

// Explicit conversions
console.log(Number('123'));
console.log(String(123));
console.log(Boolean(0), Boolean('hello'));
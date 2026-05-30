// 37_json_handling.js
// JSON.stringify and JSON.parse

const obj = { name: 'Bob', age: 40 };
const json = JSON.stringify(obj);
console.log('JSON:', json);

const parsed = JSON.parse(json);
console.log('Parsed:', parsed.name, parsed.age);
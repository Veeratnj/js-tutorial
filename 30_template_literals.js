// 30_template_literals.js
// Template literals for easier string interpolation

const name = 'Zoe';
const greeting = `Hello, ${name}! Today is ${new Date().toLocaleDateString()}`;
console.log(greeting);
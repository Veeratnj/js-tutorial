// 65_prototypal_inheritance.js
// Using Object.create to build prototype chains

const proto = { greet() { return `hey ${this.name}`; } };
const obj = Object.create(proto);
obj.name = 'Ivy';
console.log(obj.greet());
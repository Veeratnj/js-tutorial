// 64_prototypes.js
// Prototype chain and shared methods

function Person(name) { this.name = name; }
Person.prototype.say = function () { return `Hello, ${this.name}`; };

const p = new Person('Kai');
console.log(p.say());
console.log('Prototype of p:', Object.getPrototypeOf(p) === Person.prototype);
// 61_classes_objects.js
// Basic class syntax and creating objects

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

const p = new Person('Lina', 28);
console.log(p.greet(), p.age);
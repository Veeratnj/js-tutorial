// 62_constructors.js
// Constructor function pattern and class constructors

function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.info = function () { return `${this.make} ${this.model}`; };

const c = new Car('Toyota', 'Corolla');
console.log(c.info());
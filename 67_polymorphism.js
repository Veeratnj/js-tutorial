// 67_polymorphism.js
// Polymorphism: different implementations of the same interface

class Shape { area() { return 0; } }
class Square extends Shape { constructor(s) { super(); this.s = s; } area() { return this.s * this.s; } }
class Circle extends Shape { constructor(r) { super(); this.r = r; } area() { return Math.PI * this.r * this.r; } }

const shapes = [new Square(2), new Circle(1)];
for (const s of shapes) console.log('area=', s.area());
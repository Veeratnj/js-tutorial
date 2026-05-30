// 66_encapsulation.js
// Encapsulation by hiding implementation details

class Counter {
  #count = 0; // private field (ES2020+)
  inc() { this.#count++; }
  get() { return this.#count; }
}

const c = new Counter();
c.inc();
console.log('count =', c.get());
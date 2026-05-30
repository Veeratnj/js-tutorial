// 32_object_methods.js
// Methods inside objects and `this`

const counter = {
  value: 0,
  inc() { this.value++; },
};

counter.inc();
console.log('counter.value =', counter.value);
// 51_promises.js
// Creating and using Promises

const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 50);
});

p.then(value => console.log('Promise resolved:', value));
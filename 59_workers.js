// 59_workers.js
// Web Worker example (browser)

// worker.js (separate file):
// self.onmessage = e => { postMessage(e.data * 2); };

// Main script (browser):
// const w = new Worker('worker.js');
// w.postMessage(10);
// w.onmessage = e => console.log('worker result', e.data);

console.log('Web Workers run scripts in background threads (browser).');
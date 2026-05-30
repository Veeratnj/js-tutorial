// 25_callbacks.js
// Using callbacks for asynchronous tasks

function doWork(cb) {
  setTimeout(() => cb('done'), 100);
}

doWork(result => console.log('Callback result:', result));
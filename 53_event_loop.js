// 53_event_loop.js
// Simple demonstration of JavaScript event loop ordering

console.log('script start');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise then'));
console.log('script end');

// Typical output order: start, end, promise then, timeout
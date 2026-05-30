// 45_event_bubbling_capturing.js
// Demonstrates event propagation concepts (browser)

// Example (uncomment in browser):
// document.getElementById('outer').addEventListener('click', () => console.log('outer'));
// document.getElementById('inner').addEventListener('click', (e) => { e.stopPropagation(); console.log('inner'); });

console.log('Bubbling vs capturing: events bubble from inner to outer by default.');
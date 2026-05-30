// 46_forms_validation.js
// Simple form validation example (browser)

// Example HTML:
// <form id="f"><input id="name"><button>Send</button></form>
// JS (uncomment in browser):
// const f = document.getElementById('f');
// f.addEventListener('submit', (e) => {
//   const name = document.getElementById('name').value;
//   if (!name) { e.preventDefault(); alert('Name required'); }
// });

console.log('Form validation: prevent submission when inputs are invalid.');
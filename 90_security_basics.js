// 90_security_basics.js
// Basic security tips: avoid eval, validate inputs

// Never use eval with untrusted input:
// const result = eval(userInput); // dangerous

console.log('Sanitize user input and avoid risky APIs like eval().');
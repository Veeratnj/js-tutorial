// 39_regular_expressions.js
// Simple regex usage

const text = 'Email: user@example.com';
const match = text.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
console.log('Email found:', match ? match[0] : 'none');
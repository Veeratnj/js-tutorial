// 38_error_handling.js
// Try / catch / finally example

function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.error('Invalid JSON:', err.message);
    return null;
  } finally {
    // cleanup if needed
  }
}

console.log(parseJSON('{"ok":true}'));
console.log(parseJSON('invalid'));
// 92_file_system_module.js
// Read a file with fs (Node.js)

const fs = require('fs');
fs.readFile(__filename, 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log('This file has', data.length, 'characters');
});
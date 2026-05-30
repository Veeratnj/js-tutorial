// 93_path_module.js
// Using the path module to build file paths

const path = require('path');
console.log('Join:', path.join(__dirname, 'data', 'file.txt'));
console.log('Basename:', path.basename('/tmp/data/file.txt'));
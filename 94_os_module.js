// 94_os_module.js
// OS module provides system info

const os = require('os');
console.log('Platform:', os.platform());
console.log('CPU cores:', os.cpus().length);
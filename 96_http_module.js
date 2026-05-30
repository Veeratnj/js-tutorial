// 96_http_module.js
// Minimal HTTP server with Node's http module

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from http server\n');
});
server.listen(3000, () => console.log('Server listening on http://localhost:3000'));
const http = require('http');
const fs = require('fs');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.end('Welcome to the homepage');
  }
  if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./about.html').pipe(res);
  }
}

server.listen(3000, () => {
  console.log('Server listening on port 5k');
});

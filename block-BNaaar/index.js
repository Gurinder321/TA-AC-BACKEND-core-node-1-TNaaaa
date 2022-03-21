const http = require('http');
const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.get === 'GET' && req.url === '/') {
    res.write('Welcome to the homepage');
    res.end();
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>This is all about NodeJS</h2>');
  } else if (req.method === 'POST' && req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.end('Message: This is a post request');
  }
}

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});

const http = require('http');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url, req.headers);
  // Handle request
  res.end('Welcome to the server.');
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const http = require('http');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method);
  res.statusCode = 201;
  res.setHeader('Content-Type', 'text/html');
  //   res.writeHead(201, { 'Content-Type': 'text/html' });
  res.end('<h1>Welcome to zë lair!</h1>');
}

server.listen(4444, () => {
  console.log('Server listening on port 4444');
});

const http = require('http');
const fs = require('fs');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) {
        console.log(err);
      } else {
        console.log(content);
        res.end(content);
      }
    });
  }
  if (req.method === 'GET' && req.url === '/stream') {
    res.setHeader('Content-type', 'text/html');
    fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('Server listening on port 5555');
});

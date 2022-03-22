const http = require('http');
const fs = require('fs');
const PORT = 2345;
const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
  }
  if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-type', 'text/html');
    fs.createReadStream('./about.html').pipe(res);
  }
  if (req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
  if (req.url.split('.').pop() === 'jpg') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile('./assets/images/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const http = require('http');
const fs = require('fs');
const url = require('url');
const PORT = 2345;
const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname, req.url);

  res.setHeader(('Content-Type', 'application/json'));
  res.end(JSON.stringify(parsedUrl.query));
}

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

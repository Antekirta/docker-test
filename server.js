const http = require('http');

const port = process.argv[2] || 8000;

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
const http = require('http');

const port = process.env.PORT || 9000;

console.log(process.env);

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
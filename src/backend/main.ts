import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req : IncomingMessage, res: ServerResponse) => {
  res.end('Hello, maaan!');
});

server.listen(9000, () => {
  console.log('Server is truly listening on port 9000');
});

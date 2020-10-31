import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req : IncomingMessage, res: ServerResponse) => {
  res.end('Hello, world!!!');
});

server.listen(9000, () => 'Server is listening on port 9000');



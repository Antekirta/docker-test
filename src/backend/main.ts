import http, { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req : IncomingMessage, res: ServerResponse) => {
  res.end('Hello, world!!!');
});

server.listen(9000, () => 'Server is truly listening on port 9000');



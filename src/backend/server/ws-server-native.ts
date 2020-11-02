import ws from 'ws';

export default class WsServer {
    wss : ws.Server = {} as ws.Server

    constructor(port  = 8080) {
      this.wss = new ws.Server({
        port
      });

      this.wss.on('connection', (ws) => {
        ws.on('message', (message) => {
          console.log('received: %s', message);

          this.wss.clients.forEach((client) => {
            client.send(message);
          });

          // ws.send(message);
        });
      });
    }
}
import ws, { IMessage } from 'websocket';
import { Server } from 'http';

const WebSocketServer = ws.server;

interface IChatMessage {
    id: number
    name: string
    message: string
}

export default class WsServer {
    private server : ws.server = {} as ws.server
    private connection : ws.connection = {} as ws.connection
    private clients = new Set()

    constructor(httpServer : Server) {
      console.log('Init WS!');
        
      this.server = new WebSocketServer({
        httpServer,
        autoAcceptConnections: true
      });
      
      this.server.on('request', this.onRequest.bind(this));
    }

    private onRequest(req : ws.request) : void {
      console.log(`${new Date()} Connection accepted.`);
        
      this.initConnection(req);
    }
    
    private initConnection(req : ws.request) {
      this.connection = req.accept('echo-protocol', req.origin);
        
      this.connection.on('message', this.onMessage.bind(this));

      this.connection.on('close', this.onClose.bind(this));
    }

    private onMessage(message : IMessage) : void {
      console.log('onMessage message: ', message);
      
      const chatMessage : IChatMessage = JSON.parse(JSON.stringify(message.utf8Data));

      console.log('chatMessage: ', chatMessage);

      this.connection.send(JSON.stringify(message.utf8Data));
    }

    private onClose() :void {
      console.log(`${new Date()} Peer ${this.connection.remoteAddress} disconnected.`);
    }
}
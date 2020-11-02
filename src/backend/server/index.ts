import HttpServer from './http-server';
import WsServer from './ws-server';
import { Server } from 'http';

type serverType = 'http' | 'ws' | 'tcp'

const serverTypes = {
  http: HttpServer,
  ws: HttpServer,
  tcp: HttpServer
};

export default class ServerFactory {
  createServer(type : serverType, port :  number) : HttpServer {
    return new serverTypes[type](port);
  }
  
  createWsServer(httpServer : Server) : WsServer {
    return new WsServer(httpServer);
  }
}
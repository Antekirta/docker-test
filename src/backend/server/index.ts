import HttpServer from './http-server';
import WsServer from './ws-server-native';
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
  
  createWsServer() : WsServer {
    return new WsServer();
  }
}
import ServerFactory from './server/';

export const root = __dirname;

const serverFactory = new ServerFactory();

const httpServer = serverFactory.createServer('http', 9000);

serverFactory.createWsServer(httpServer.server);
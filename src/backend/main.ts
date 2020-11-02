import ServerFactory from './server/';

export const root = __dirname;

const serverFactory = new ServerFactory();

serverFactory.createServer('http', 9000);

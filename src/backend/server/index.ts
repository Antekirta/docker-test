import http, { IncomingMessage, Server, ServerResponse } from 'http';
import Router from '../router';
import Render from '../render';
import ResourcesLoader from '../recources';

type serverType = 'http' | 'ws' | 'tcp'

const router = new Router();

class HttpServer {
    private readonly renderer : Render = {} as Render;
    private readonly resourcesLoader : ResourcesLoader = {} as ResourcesLoader;
    private readonly server: Server = {} as Server

    constructor(port : number) {
      this.renderer = new Render();

      this.resourcesLoader = new ResourcesLoader();

      this.server = http.createServer(this.onRequest.bind(this));
        
      this.server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
      });
    }
    
    onRequest(req : IncomingMessage, res: ServerResponse) {
      try {
        const { type, payload } = router.get(req);

        if (type === 'view') {
          this.renderer.render(payload)
            .then((data) => res.end(data))
            .catch((err) => res.end(err));
        } else if (type === 'text-resource') {
          this.resourcesLoader.load(payload)
            .then((data) => res.end(data))
            .catch((err) => res.end(err));
        } else if (type === 'image') {
          // load image
        }
      } catch (err) {
        console.error(err);
      }
    }
}

const serverTypes = {
  http: HttpServer,
  ws: HttpServer,
  tcp: HttpServer
};

export default class ServerFactory {
  createServer(type : serverType, port :  number) {
    return new serverTypes[type](port);
  }
}
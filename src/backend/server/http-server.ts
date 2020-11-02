import Render from '../render';
import ResourcesLoader from '../recources';
import http, { IncomingMessage, Server, ServerResponse } from 'http';
import Router from '../router';

const router = new Router();

export default class HttpServer {
    private readonly renderer : Render = {} as Render;
    private readonly resourcesLoader : ResourcesLoader = {} as ResourcesLoader;
    public readonly server: Server = {} as Server

    constructor(port : number) {
      this.renderer = new Render();

      this.resourcesLoader = new ResourcesLoader();

      this.server = http.createServer(this.onRequest.bind(this));
        
      this.server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
      });
    }
    
    onRequest(req : IncomingMessage, res: ServerResponse) : void {
      try {
        const { method } = req;
        
        if (method === 'GET') {
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
        } else if (method === 'POST') {
          let body = '';

          req.on('data', (data) => {
            console.log('data: ', JSON.parse(data.toString()));
            
            body += data.toString();
          });
          
          req.on('end', () => {
            res.end(body);
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
}
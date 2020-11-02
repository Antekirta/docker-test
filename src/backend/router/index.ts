import { IncomingMessage } from 'http';

type routeType = 'text-resource' | 'view' | 'image'

interface IRouteInfo {
    type : routeType
    payload : string
}

interface URI {
    hostname : string
    ip : string
    originalUrl : string
    query : {
        [key: string] : string
    }
    path : string
    protocol : string

}

interface IViews {
    [key: string]: string
}

export default class Router {
    private views : IViews = {
      '/': 'index',
      '/about': 'about'
    }

    public get(req : IncomingMessage) : IRouteInfo | never {
      const { url } = req;
      let path = '';
      
      if (url) {
        path = Router.parse(url).path;
      }
      
      const routeType = Router.getRouteType(path);
      
      if (routeType === 'view') {
        if (!this.views[path]) {
          throw new Error(`Error 404. View ${path} doesn't exist.`);
        }
          
        return {
          type: routeType,
          payload: this.views[path]
        };
      }
      
      if (routeType === 'text-resource') {
        return {
          type: routeType,
          payload: path
        }; 
      }

      return {
        type: 'view',
        payload: 'index'
      };
    }
    
    private static parse(uri : string) : URI {
      const [path, query] = uri.split('?');

      if (query) {
        // handle query
      }

      return {
        hostname: '',
        ip : '',
        originalUrl : uri,
        query : {},
        path,
        protocol : ''
      };
    }

    private static getRouteType(path : string) : routeType {
      if (/\.[css|js]/.test(path)) {
        return 'text-resource';
      }

      if (/\.[ico|jpg|jpeg|png|svg]/.test(path)) {
        return 'image';
      }

      return 'view';
    }
}
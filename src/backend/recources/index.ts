import fs from 'fs';
import path from 'path';
import { root } from '../main';

export default class ResourcesLoader {
    private resourcesFolder : string = path.resolve(root, '../../dist/')
    
    public load(resourceName : string) : Promise<string> {
      return fs.promises
        .readFile(this.constructPathToResource(resourceName))
        .then((data) => data.toString())
        .catch((err) => err.toString());
    }

    private constructPathToResource(resourceName : string) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, folderNameByExt] = resourceName.split('.');

      return path.normalize(`${this.resourcesFolder}/${folderNameByExt}/${resourceName}`);
    }
}
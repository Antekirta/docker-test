import fs from 'fs';
import path from 'path';
import { root } from '../main';

export default class Render {
   private viewsFolder : string = path.resolve(root, '../frontend/views/')
    
   public render(view : string) : Promise<string> {
     return fs.promises
       .readFile(this.constructPathToView(view))
       .then((data) => data.toString())
       .catch((err) => err.toString());
   }
   
   private constructPathToView(viewName : string) {
     return `${this.viewsFolder}/${viewName}.html`;
   }
}
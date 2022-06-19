import { Express } from 'express';
import { appCors, bodyParser } from '../middlewares';


export default (app: Express): void => {
    app.use(bodyParser);
    app.use(appCors());
}
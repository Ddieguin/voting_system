import express from 'express';
import { routes } from './routes';


export default (app: express.Express): void => {
    app.use('/api', routes);
}
import express from 'express';
import setRoutes from '../routes/index';
import setMiddleware from './middleware';
import setExpressAsyncErrors from '../errors/';

const app = express();

setMiddleware(app);
setRoutes(app);
setExpressAsyncErrors(app);

export default app;
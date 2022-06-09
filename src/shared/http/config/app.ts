import express from 'express';
import setRoutes from '../routes/index'

const app = express();


setRoutes(app);

export default app;
import { Router } from 'express';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeCreateSessionsController } from '../factories/create-session';


const sessionRoutes = Router();

sessionRoutes.post('/', adaptRoutes(makeCreateSessionsController()));

export { sessionRoutes };
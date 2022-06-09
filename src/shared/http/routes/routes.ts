import { Router } from 'express';
import { candidateRoutes } from '../../../modules/candidate/routes/candidate-routes';
import { voterRoutes } from '../../../modules/voter/routes/voter-routes';


const routes = Router();

routes.use('/voter', voterRoutes);
routes.use('/candidate', candidateRoutes);

//* Definir todas as rotas referente aos sub-modulos


export { routes };
import { Router, Request, Response } from 'express';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeCreateCandidateController } from '../factories/create-candidate';
import { makeListVotesController } from '../factories/list-votes';
import { bodyCreateCandidateValidation } from './middlewares/validations/body-create-candidate-validation';

const candidateRoutes = Router();

candidateRoutes.post('/', bodyCreateCandidateValidation(), adaptRoutes(makeCreateCandidateController()));
candidateRoutes.get('/votes/:number_political_party', adaptRoutes(makeListVotesController()));

export { candidateRoutes };

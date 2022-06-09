import { Router } from 'express';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeCreateCandidateController } from '../factories/create-candidate';
import { makeListVotesController } from '../factories/list-votes';

const candidateRoutes = Router();

candidateRoutes.post('/', adaptRoutes(makeCreateCandidateController()));
candidateRoutes.get('/votes/:number_political_party', adaptRoutes(makeListVotesController()));

export { candidateRoutes };

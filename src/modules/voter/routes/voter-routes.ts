import { Router } from 'express';
import { adaptRoutes } from '../../../shared/http/adapters/express-adapter';
import { makeCreateVoterController } from '../factories/create-voter';
import { makeUpdateVoteController } from '../factories/update-vote';
import { isAuthenticated } from './middlewares/auth-middleware';
import { bodyCreateVoterValidation } from './middlewares/validations/body-create-voter-validation';
import { bodyUpdateVoteValidation } from './middlewares/validations/body-update-vote-validation';

const voterRoutes = Router();

//* create a voter
voterRoutes.post('/', bodyCreateVoterValidation(), adaptRoutes(makeCreateVoterController()));

//* update your the vote
voterRoutes.patch('/', isAuthenticated(), bodyUpdateVoteValidation(), adaptRoutes(makeUpdateVoteController()));

export { voterRoutes };

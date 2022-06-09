import { CreateSessionController } from "../controllers/auth/create-sessions-controller";
import { CreateSessionService } from "../services/create-session-service";
import { VoterRepository } from "../typeorm/repositories/voter-repository";


export const makeCreateSessionsController = (): CreateSessionController => {
    const createSessionService = new CreateSessionService(
        VoterRepository.getInstance()
    );

    const createSessionController = new CreateSessionController(
        createSessionService
    );

    return createSessionController;
}
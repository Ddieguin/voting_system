import { CreateVoterController } from "../controllers/create-voter-controller";
import { CreateVoterService } from "../services/create-voter-service";
import { VoterRepository } from "../typeorm/repositories/voter-repository";

export const makeCreateVoterController = (): CreateVoterController => {
    const createVoterService = new CreateVoterService(
        VoterRepository.getInstance()
    );
    const createVoterController = new CreateVoterController(createVoterService);
    
    return createVoterController;
}
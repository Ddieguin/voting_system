import { CreateCandidateController } from "../controllers/create-candidate-controller";
import { CreateCandidateService } from "../services/create-candidate-service";
import { CandidateRepository } from "../typeorm/repositories/candidate-repository";

export const makeCreateCandidateController = (): CreateCandidateController => {
    const createCandidateService = new CreateCandidateService(
        CandidateRepository.getInstance()
    )

    const createCandidateController = new CreateCandidateController(
        createCandidateService
    )

    return createCandidateController;
}
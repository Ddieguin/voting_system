import { UpdateVoteController } from "../controllers/update-vote-controller";
import { UpdateVoteService } from "../services/update-vote-service";
import { VoterRepository } from "../typeorm/repositories/voter-repository"; 
import { CandidateRepository } from "../../candidate/typeorm/repositories/candidate-repository";


export const makeUpdateVoteController = (): UpdateVoteController => {
    const updateVoteService = new UpdateVoteService(
        VoterRepository.getInstance(),
        CandidateRepository.getInstance(),
    )

    const updateVoteController = new UpdateVoteController(
        updateVoteService
    )

    return updateVoteController;
}
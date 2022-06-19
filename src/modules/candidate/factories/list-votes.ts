import { ListVoterService } from "../../voter/services/list-voter-service";
import { VoterRepository } from "../../voter/typeorm/repositories/voter-repository";
import { ListVotesController } from "../controllers/list-votes-controller";
import { ListVotesService } from "../services/list-votes-service";
import { CandidateRepository } from "../typeorm/repositories/candidate-repository";


export const makeListVotesController = (): ListVotesController => {
    const listVotesService = new ListVotesService(
        CandidateRepository.getInstance(),
        VoterRepository.getInstance()
    )

    const listVotesController = new ListVotesController(
        listVotesService
    );

    return listVotesController;
}
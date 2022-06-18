import { AppError } from "../../../shared/http/errors/app-error";
import { VoterRepository } from "../../voter/typeorm/repositories/voter-repository";
import { CandidateRepository } from "../typeorm/repositories/candidate-repository";


interface IRequestListVotes {
    number_political_party: string
}


//TODO review
export class ListVotesService {
    private readonly candidateRepository: CandidateRepository;
    private readonly voterRepository: VoterRepository;

    constructor(candidateRepository: CandidateRepository, voterRepository: VoterRepository) {
        this.candidateRepository = candidateRepository;
        this.voterRepository = voterRepository;
    }

    async execute({ number_political_party }: IRequestListVotes) {
        const candidate = await this.candidateRepository.findByNumberPoliticalParty(number_political_party);

        if(!candidate) {
            throw new AppError(`Candidate already exists`);
        }

        const voters = await this.voterRepository.getAllVoters(candidate.id);

        const num_votes = voters.length;

        return num_votes;       
    }
}
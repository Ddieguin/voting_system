import { AppError } from "../../../shared/http/errors/app-error";
import { CandidateRepository } from "../../candidate/typeorm/repositories/candidate-repository";
import { VoterRepository } from "../typeorm/repositories/voter-repository";


interface IRequestUpdateVote {
    vote: string;
    voter_id: string;
}


export class UpdateVoteService {
    private readonly voterRepository: VoterRepository;
    private readonly candidateRepository: CandidateRepository;

    constructor(voterRepository: VoterRepository, candidateRepository: CandidateRepository) {
        this.voterRepository = voterRepository;
        this.candidateRepository = candidateRepository;
    }

    async execute({ voter_id, vote }: IRequestUpdateVote): Promise<void> {
        const voter = await this.voterRepository.findById(voter_id);

        if(!voter) {
            throw new AppError(`Voter not found`);
        }

        const candidate = await this.candidateRepository.findByNumberPoliticalParty(vote);
        
        if(!candidate) {
            throw new AppError(`Candidate not found`);
        }

        //* fill candidate with vote 
        voter.candidate_id = candidate.id;
        voter.candidate = candidate;

        await this.voterRepository.save(voter);
    }

}
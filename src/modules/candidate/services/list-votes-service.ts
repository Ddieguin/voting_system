import { AppError } from "../../../shared/http/errors/app-error";
import { CandidateRepository } from "../typeorm/repositories/candidate-repository";



//TODO review
export class ListVotesService {
    private readonly candidateRepository: CandidateRepository;

    constructor(candidateRepository: CandidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    async execute(number_political_party: string) {
        const candidate = await this.candidateRepository.findByNumberPoliticalParty(number_political_party);

        if(!candidate) {
            throw new AppError(`Candidate already exists`);
        }

        return candidate.voters;
    }
}
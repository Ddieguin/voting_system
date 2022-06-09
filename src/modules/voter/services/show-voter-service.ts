import { AppError } from "../../../shared/http/errors/app-error";
import { Voter } from "../typeorm/entities/voter";
import { VoterRepository } from "../typeorm/repositories/voter-repository";


export class ShowVoterService {
    private readonly voterRepository: VoterRepository;

    constructor(voterRepository: VoterRepository) {
        this.voterRepository = voterRepository;
    }

    async execute(id: string): Promise<Voter> {
        const voter = await this.voterRepository.findById(id);

        if(!voter) {
            throw new AppError('Voter was not found');
        }

        return voter;
    }
}
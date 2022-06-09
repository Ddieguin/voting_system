import { VoterRepository } from "../typeorm/repositories/voter-repository";
import { Voter } from "../typeorm/entities/voter";


export class ListVoterService {
    private readonly voterRepository: VoterRepository;

    constructor(voterRepository: VoterRepository) {
        this.voterRepository = voterRepository;
    }

    //TODO implement pagination service
    async execute(): Promise<Voter[]> {
        const voter = await this.voterRepository.find();

        return voter;
    }
}
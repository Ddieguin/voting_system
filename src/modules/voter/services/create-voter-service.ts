import { compare } from "bcrypt";
import { AppError } from "../../../shared/http/errors/app-error";
import { VoterRepository } from "../typeorm/repositories/voter-repository";

interface ICreateVoter {
    name: string;
    rg: string;
    city: string;
    date_birthday: Date;
    district: string;
}


export class CreateVoterService {

    private readonly voterRepository: VoterRepository;

    constructor(voterRepository: VoterRepository) {
        this.voterRepository = voterRepository;
    }
    
    async execute({ name, rg, city, date_birthday, district }: ICreateVoter) {

        const voter = await this.voterRepository.findByName(name)

        if(voter) {
            const isValidRg = await compare(rg, voter.rg);
            if(isValidRg) {
                throw new AppError(`Voter already exits`, 401);
            }
        }

        const new_voter = this.voterRepository.create({
            name, 
            rg,
            city,
            date_birthday,
            district,
        })
        
        await this.voterRepository.save(new_voter) 

        return new_voter;
    }
} 
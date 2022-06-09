import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";


import { VoterRepository } from "../typeorm/repositories/voter-repository";
import { AppError } from "../../../shared/http/errors/app-error";
import config from '../../../config/auth'

interface IAuth {
    name: string;
    rg: string;
}

export class CreateSessionService {
    private readonly voterRepository: VoterRepository;

    constructor(voterRepository: VoterRepository) {
        this.voterRepository = voterRepository;
    }

    async execute({ rg, name }: IAuth) {
        const voter = await this.voterRepository.findByName(name)

        if(!voter) {
            throw new AppError(`Incorrect name`, 401);
        }

        const isValidRg = await compare(rg, voter.rg);

        if(!isValidRg) {
            throw new AppError(`Incorrect rg`)
        }

        const token = sign({ id: voter.id }, config.jwt.secret, {
            expiresIn: config.jwt.expiresIn
        })

        return {
            voter, 
            token
        }

    }

}
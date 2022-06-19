import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { Candidate } from "../../../candidate/typeorm/entities/candidate";
import { Voter } from "../entities/voter";


/**Singleton Repository */
@EntityRepository(Voter)
export class VoterRepository extends Repository<Voter> {
    private static instance: VoterRepository;

    public static getInstance(): VoterRepository {
        if(!VoterRepository.instance) 
            VoterRepository.instance = getCustomRepository(this);

        return VoterRepository.instance;
    }

    async findById(id: string): Promise<Voter | undefined> {
        const voter = await this.findOne({
            where: {
                id
            }
        })

        return voter;
    }
    
    async findByRg(rg: string): Promise<Voter | undefined> {
        const voter = await this.findOne({
            where: {
                rg
            }
        })

        return voter;
    }

    async getAllVoters(candidate_id: string) {
        
        const voters = await this.find({
            where: {
                candidate_id
            }
        })
    
        return voters;
    }


    async findByName(name: string): Promise<Voter | undefined> {
        const voter = await this.findOne({
            where: {
                name
            }
        })

        return voter;
    }
}

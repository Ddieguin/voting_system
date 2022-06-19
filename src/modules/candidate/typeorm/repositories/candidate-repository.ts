import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { Candidate } from "../entities/candidate";


/**Singleton Repository */
@EntityRepository(Candidate)
export class CandidateRepository extends Repository<Candidate> {
    private static instance: CandidateRepository;

    public static getInstance(): CandidateRepository {
        if(!CandidateRepository.instance) 
            CandidateRepository.instance = getCustomRepository(this);

        return CandidateRepository.instance;
    }

    async findById(id: string): Promise<Candidate | undefined> {
        const candidate = await this.findOne({
            where: {
                id
            }
        })

        return candidate;
    } 

    async findByNumberPoliticalParty(number_political_party: string): Promise<Candidate | undefined> {
        
        const candidate = await this.findOne({
            where: {
                number_political_party
            }
        })

        return candidate;
    }


    async findByName(name: string): Promise<Candidate | undefined> {
        const candidate = await this.findOne({
            where: {
                name
            }
        })

        return candidate;
    }
}

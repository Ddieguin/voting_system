import { compare } from 'bcrypt';
import { AppError } from '../../../shared/http/errors/app-error';
import { CandidateRepository } from '../typeorm/repositories/candidate-repository';

interface ICreateCandidate {
  name: string;
  rg: string;
  political_party: string;
  number_political_party: string;
  birth_city: string;
  city: string;
  date_birthday: string;
}

export class CreateCandidateService {
  private readonly candidateRepository: CandidateRepository;

  constructor(candidateRepository: CandidateRepository) {
    this.candidateRepository = candidateRepository;
  }

  async execute({
    name,
    political_party,
    number_political_party,
    birth_city,
    rg,
    city,
    date_birthday,
  }: ICreateCandidate) {
    const candidate = await this.candidateRepository.findByName(name);

    if (candidate) {
      const isValidRg = await compare(rg, candidate.rg);
      if (isValidRg) {
        throw new AppError(`Candidate already exits`, 400);
      }
    }

    const new_candidate = this.candidateRepository.create({
      name,
      rg,
      political_party,
      number_political_party,
      birth_city,
      city,
      date_birthday: new Date(date_birthday).toISOString(),
    });

    await this.candidateRepository.save(new_candidate);

    return new_candidate;
  }
}

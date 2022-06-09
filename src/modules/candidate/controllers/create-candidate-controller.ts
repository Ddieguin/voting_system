import { IControllerBase } from "../../../shared/http/interface/controller/controller";
import { IHttpRequest, IHttpResponse } from "../../../shared/http/ports/http";
import { CreateCandidateService } from "../services/create-candidate-service";


export class CreateCandidateController implements IControllerBase {
    private readonly createCandidateService: CreateCandidateService;

    constructor(createCandidateService: CreateCandidateService) {
        this.createCandidateService = createCandidateService;
    }

    async handle({ body }: IHttpRequest): Promise<IHttpResponse> {
        const candidate = await this.createCandidateService.execute(body); 

        return {
            body: {
                data: candidate
            },
            statusCode: 201
        }
    }   
}
import { IControllerBase } from "../../../shared/http/interface/controller/controller";
import { IHttpRequest, IHttpResponse } from "../../../shared/http/ports/http";
import { CreateVoterService } from "../services/create-voter-service";


export class CreateVoterController implements IControllerBase {
    private readonly createVoterService: CreateVoterService;

    constructor(createVoterService: CreateVoterService) {
        this.createVoterService = createVoterService;
    }

    async handle({ body }: IHttpRequest): Promise<IHttpResponse> {
        const voter = await this.createVoterService.execute(body);

        return {
            body: {
                data: voter
            },
            statusCode: 201,
        }
    }
}
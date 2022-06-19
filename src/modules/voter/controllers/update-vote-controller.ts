import { IControllerBase } from "../../../shared/http/interface/controller/controller";
import { IHttpRequest, IHttpResponse } from "../../../shared/http/ports/http";
import { UpdateVoteService } from "../services/update-vote-service";

export class UpdateVoteController implements IControllerBase {
    
    private readonly updateVoteService: UpdateVoteService;

    constructor(updateVoteService: UpdateVoteService) {
        this.updateVoteService = updateVoteService;
    }   

    async handle({ body, voter_id }: IHttpRequest): Promise<IHttpResponse> {
        await this.updateVoteService.execute({ ...body, voter_id });

        return {
            body: {
                data: "confirmed vote"
            },
            statusCode: 200,
        }
    }

}
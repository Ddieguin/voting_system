import { IControllerBase } from "../../../shared/http/interface/controller/controller";
import { IHttpRequest, IHttpResponse } from "../../../shared/http/ports/http";
import { ListVotesService } from "../services/list-votes-service";



export class ListVotesController implements IControllerBase {
    private readonly listVotesService: ListVotesService;


    constructor(listVotesService: ListVotesService) {
        this.listVotesService = listVotesService;
    }

    async handle({ query }: IHttpRequest): Promise<IHttpResponse>  {

        const votes = await this.listVotesService.execute(query);

        return {
            body: {
                data: votes
            },
            statusCode: 200,
        }
    }   
}
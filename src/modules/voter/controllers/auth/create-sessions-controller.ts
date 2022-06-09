import { IControllerBase } from "../../../../shared/http/interface/controller/controller"
import { IHttpRequest, IHttpResponse } from "../../../../shared/http/ports/http"
import { CreateSessionService } from "../../services/create-session-service";

export class CreateSessionController implements IControllerBase {
    private readonly createSessionService: CreateSessionService;

    constructor(createSessionService: CreateSessionService) {
        this.createSessionService = createSessionService;
    }

    async handle({ body }: IHttpRequest): Promise<IHttpResponse> {
        const createSession = await this.createSessionService.execute(body);
        
        return {
            body: {
                data: createSession,
            },
            statusCode: 200,
        }   
    }
}
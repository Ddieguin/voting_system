import { Request, Response } from 'express';
import { IHttpRequest } from '../ports/http';
import { IControllerBase } from '../interface/controller/controller'

export const adaptRoutes = (controller:  IControllerBase) => {
    return async (req: Request, res: Response) => {
        const request: IHttpRequest = {
            body: req.body
        };

        const response = await controller.handle(request);
        return res.status(response.statusCode).json(response.body);
    }
}
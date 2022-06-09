import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../../shared/http/errors/app-error";
import { verify } from "jsonwebtoken";


interface ITokenPayload {
    id: string;
    iat: number;
    exp: number;
}


 export const isAuthenticated = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { authorization } = req.headers;

        if(!authorization) 
            throw new AppError(`JWT token is missing`);

        const [, token] = authorization.split(' ');

        try {
            const voter = verify(token, process.env.JWT_SECRET);
            const { id } = voter as ITokenPayload;
            req.voter_id = id;
            return next();
        } catch(err) {
            throw new AppError(`Invalid JWT token`);
        }
    }
 }
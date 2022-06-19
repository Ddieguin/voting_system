import { Request, Response, NextFunction } from 'express';

// Interface AppError
interface IAppError {
    message: string;
    statusCode: number;
}

export class AppError extends Error implements IAppError {
    public statusCode: number;
    constructor(message: string, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const appError = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            data: {
                message: err.message
            }
        })
    }
    console.log(err);
    return res.status(500).json({
        status: "error",
        message: `Internal server error`
    })
}
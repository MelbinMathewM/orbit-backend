import { NextFunction, Request, Response } from "express";

export interface IUserController {
    postContactData(req: Request, res: Response, next: NextFunction): Promise<void>;
}
import { NextFunction, Request, Response } from "express";

export interface IBookingController {
    postFlightEnquiry(req: Request, res: Response, next: NextFunction): Promise<void>;
}
import { NextFunction, Request, Response } from "express";

export interface IBookingController {
    postFlightEnquiry(req: Request, res: Response, next: NextFunction): Promise<void>;
    postHotelBooking(req: Request, res: Response, next: NextFunction): Promise<void>;
    postOutstationBooking(req: Request, res: Response, next: NextFunction): Promise<void>;
    postDayTourEnquiry(req: Request, res: Response, next: NextFunction): Promise<void>;
}
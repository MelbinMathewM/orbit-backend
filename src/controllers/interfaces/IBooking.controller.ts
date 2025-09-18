import { NextFunction, Request, Response } from "express";

export interface IBookingController {
    postFlightEnquiry(req: Request, res: Response, next: NextFunction): Promise<void>;
    getFlightEnquiries(req: Request, res: Response, next: NextFunction): Promise<void>;
    getFlightEnquiryById(req: Request, res: Response, next: NextFunction): Promise<void>;

    postHotelBooking(req: Request, res: Response, next: NextFunction): Promise<void>;
    getHotelBookings(req: Request, res: Response, next: NextFunction): Promise<void>;
    getHotelBookingById(req: Request, res: Response, next: NextFunction): Promise<void>;

    postOutstationBooking(req: Request, res: Response, next: NextFunction): Promise<void>;
    getOutstationBookings(req: Request, res: Response, next: NextFunction): Promise<void>;
    getOutstationBookingById(req: Request, res: Response, next: NextFunction): Promise<void>;

    postDayTourEnquiry(req: Request, res: Response, next: NextFunction): Promise<void>;
    getDayTourEnquiries(req: Request, res: Response, next: NextFunction): Promise<void>;
    getDayTourEnquiryById(req: Request, res: Response, next: NextFunction): Promise<void>;

    postWellnessPackage(req: Request, res: Response, next: NextFunction): Promise<void>;
    getWellnessPackages(req: Request, res: Response, next: NextFunction): Promise<void>;
    getWellnessPackageById(req: Request, res: Response, next: NextFunction): Promise<void>;
}
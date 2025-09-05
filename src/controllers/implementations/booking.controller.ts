import { inject } from "inversify";
import { IBookingController } from "../interfaces/IBooking.controller";
import { BookingService } from "../../services/implementations/booking.service";
import { Request, Response, NextFunction } from "express";
import { IFlightEnquiry } from "../../models/interfaces/IFlight-enquiry.model";
import { HttpStatus } from "../../constants/status.constant";
import { HttpResponse } from "../../constants/response.constant";
import { dayTourEnquiryValidation, flightEnquiryValidation, hotelBookingValidation, outstationBookingValidation } from "../../utils/validation.util";
import { IHotelBooking } from "../../models/interfaces/IHotel-booking.model";
import { IOutstationBooking } from "../../models/interfaces/IOutstation-booking.model";
import { IDayTourEnquiry } from "../../models/interfaces/IDay-tour-enquiry.model";

export class BookingController implements IBookingController {
    constructor( @inject(BookingService) private _bookingService: BookingService) {}

    async postFlightEnquiry(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const flightEnquiry : IFlightEnquiry = req.body.form;

            const error = flightEnquiryValidation(flightEnquiry);

            if(error){
                res.status(HttpStatus.BAD_REQUEST).json({ error });
                return;
            }

            const newFlightEnquiry = await this._bookingService.postFlightEnquiry(flightEnquiry);

            res.status(HttpStatus.CREATED).json({ message: HttpResponse.FORM_SUBMITTED, newFlightEnquiry });
        }catch(err){
            next(err);
        }
    }

    async postHotelBooking(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const hotelBooking: IHotelBooking = req.body.form;

            const error = hotelBookingValidation(hotelBooking);

            if(error){
                res.status(HttpStatus.BAD_REQUEST).json({ error });
                return;
            }

            const newHotelBooking = await this._bookingService.postHotelBooking(hotelBooking);

            res.status(HttpStatus.CREATED).json({ message: HttpResponse.FORM_SUBMITTED, newHotelBooking });
        }catch(err){
            next(err);
        }
    }

    async postOutstationBooking(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const outstationBooking: IOutstationBooking = req.body.payload;

            const error = outstationBookingValidation(outstationBooking);

            if(error){
                res.status(HttpStatus.BAD_REQUEST).json({ error });
                return;
            }

            const newOutstationBooking = await this._bookingService.postOutstationBooking(outstationBooking);

            res.status(HttpStatus.CREATED).json({ message: HttpResponse.FORM_SUBMITTED, newOutstationBooking });
        }catch(err){
            next(err);
        }
    }

    async postDayTourEnquiry(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const dayTourEnquiry: IDayTourEnquiry = req.body.payload;

            const error = dayTourEnquiryValidation(dayTourEnquiry);

            if(error){
                res.status(HttpStatus.BAD_REQUEST).json({ error });
                return;
            }

            const newDayTourEnquiry = await this._bookingService.postDayTourEnquiry(dayTourEnquiry);

            res.status(HttpStatus.CREATED).json({ message: HttpResponse.FORM_SUBMITTED, newDayTourEnquiry });
        }catch(err){
            next(err);
        }
    }
}
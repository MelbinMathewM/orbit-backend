import { inject } from "inversify";
import { IBookingController } from "../interfaces/IBooking.controller";
import { BookingService } from "../../services/implementations/booking.service";
import { Request, Response, NextFunction } from "express";
import { IFlightEnquiry } from "../../models/interfaces/IFlight-enquiry.model";
import { HttpStatus } from "../../constants/status.constant";
import { HttpResponse } from "../../constants/response.constant";
import { flightEnquiryValidation } from "../../utils/validation.util";

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
}
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
    };

    async getFlightEnquiries(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{

            const flightEnquiries = await this._bookingService.getFlightEnquiries();

            res.status(HttpStatus.OK).json({ flightEnquiries });
        }catch(err){
            next(err);
        }
    };

    async getFlightEnquiryById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{

            const id = req.params.id;

            const flightEnquiry = await this._bookingService.getFlightEnquiryById(id);

            res.status(HttpStatus.OK).json({ flightEnquiry });
        }catch(err){
            next(err);
        }
    };

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
    };

    async getHotelBookings(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const hotelBookings = await this._bookingService.getHotelBookings();

            res.status(HttpStatus.OK).json({ hotelBookings });
        }catch(err){
            next(err);
        }
    };

    async getHotelBookingById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{

            const id = req.params.id;

            const hotelBooking = await this._bookingService.getHotelBookingById(id);

            res.status(HttpStatus.OK).json({ hotelBooking });
        }catch(err){
            next(err);
        }
    };

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
    };

    async getOutstationBookings(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const outstationBookings = await this._bookingService.getOutstationBookings();

            res.status(HttpStatus.OK).json({ outstationBookings });
        }catch(err){
            next(err);
        }
    };

    async getOutstationBookingById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{

            const id = req.params.id;

            const outstationBooking = await this._bookingService.getOutstationBookingById(id);

            res.status(HttpStatus.OK).json({ outstationBooking });
        }catch(err){
            next(err);
        }
    };

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
    };

    async getDayTourEnquiries(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const dayTourEnquiries = await this._bookingService.getDayTourEnquiries();

            res.status(HttpStatus.OK).json({ dayTourEnquiries });
        }catch(err){
            next(err);
        }
    };

    async getDayTourEnquiryById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{

            const id = req.params.id;

            const dayTourEnquiry = await this._bookingService.getDayTourEnquiryById(id);

            res.status(HttpStatus.OK).json({ dayTourEnquiry });
        }catch(err){
            next(err);
        }
    };
}
import { inject, injectable } from "inversify";
import { IBookingService } from "../interfaces/IBooking.service";
import { IFlightEnquiryRepository } from "../../repositories/interfaces/IFlight-enquiry.repository";
import { IFlightEnquiry } from "../../models/interfaces/IFlight-enquiry.model";
import { IHotelBookingRepository } from "../../repositories/interfaces/IHotel-booking.repository";
import { IHotelBooking } from "../../models/interfaces/IHotel-booking.model";
import { IOutstationBookingRepository } from "../../repositories/interfaces/IOutstation-booking.repository";
import { IOutstationBooking } from "../../models/interfaces/IOutstation-booking.model";
import { IDayTourEnquiryRepository } from "../../repositories/interfaces/IDay-tour-enquiry.repository";
import { IDayTourEnquiry } from "../../models/interfaces/IDay-tour-enquiry.model";

@injectable()
export class BookingService implements IBookingService {
    constructor(
        @inject("IFlightEnquiryRepository") private _flightEnquiryRepository: IFlightEnquiryRepository,
        @inject("IHotelBookingRepository") private _hotelBookingRepository: IHotelBookingRepository,
        @inject("IOutstationBookingRepository") private _outstationBookingRepository: IOutstationBookingRepository,
        @inject("IDayTourEnquiryRepository") private _dayTourEnquiryRepository: IDayTourEnquiryRepository,
    ) {}

    async postFlightEnquiry(flightEnquiry: IFlightEnquiry): Promise<IFlightEnquiry> {
        
        const newFlightEnquiry = await this._flightEnquiryRepository.create(flightEnquiry);

        return newFlightEnquiry;
    };

    async postHotelBooking(hotelBooking: IHotelBooking): Promise<IHotelBooking> {

        const newHotelBooking = await this._hotelBookingRepository.create(hotelBooking);

        return newHotelBooking;
    };

    async postOutstationBooking(outstationBooking: IOutstationBooking): Promise<IOutstationBooking> {
        
        const newOutstationBooking = await this._outstationBookingRepository.create(outstationBooking);

        return newOutstationBooking;
    };

    async postDayTourEnquiry(dayTourEnquiry: IDayTourEnquiry): Promise<IDayTourEnquiry> {
        
        const newDayTourEnquiry = await this._dayTourEnquiryRepository.create(dayTourEnquiry);

        return newDayTourEnquiry;
    }
}
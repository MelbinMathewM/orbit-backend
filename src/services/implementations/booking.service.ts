import { inject, injectable } from "inversify";
import { IBookingService } from "../interfaces/IBooking.service";
import { IFlightEnquiryRepository } from "../../repositories/interfaces/IFlight-enquiry.repository";
import { IFlightEnquiry } from "../../models/interfaces/IFlight-enquiry.model";

@injectable()
export class BookingService implements IBookingService {
    constructor( @inject("IFlightEnquiryRepository") private _flightEnquiryRepository: IFlightEnquiryRepository) {}

    async postFlightEnquiry(flightEnquiry: IFlightEnquiry): Promise<IFlightEnquiry> {
        
        const newFlightEnquiry = await this._flightEnquiryRepository.create(flightEnquiry);

        return newFlightEnquiry;
    }
}
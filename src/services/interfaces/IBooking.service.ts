import { IFlightEnquiry } from "../../models/interfaces/IFlight-enquiry.model";

export interface IBookingService {
    postFlightEnquiry(flightEnquiry: IFlightEnquiry): Promise<IFlightEnquiry>;
}
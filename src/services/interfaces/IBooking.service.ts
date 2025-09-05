import { IDayTourEnquiry } from "../../models/interfaces/IDay-tour-enquiry.model";
import { IFlightEnquiry } from "../../models/interfaces/IFlight-enquiry.model";
import { IHotelBooking } from "../../models/interfaces/IHotel-booking.model";
import { IOutstationBooking } from "../../models/interfaces/IOutstation-booking.model";

export interface IBookingService {
    postFlightEnquiry(flightEnquiry: IFlightEnquiry): Promise<IFlightEnquiry>;
    postHotelBooking(hotelBooking: IHotelBooking): Promise<IHotelBooking>;
    postOutstationBooking(outstationBooking: IOutstationBooking): Promise<IOutstationBooking>;
    postDayTourEnquiry(dayTourEnquiry: IDayTourEnquiry): Promise<IDayTourEnquiry>;
}
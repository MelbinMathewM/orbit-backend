import { IDayTourEnquiry } from "../../models/interfaces/IDay-tour-enquiry.model";
import { IFlightEnquiry } from "../../models/interfaces/IFlight-enquiry.model";
import { IHotelBooking } from "../../models/interfaces/IHotel-booking.model";
import { IOutstationBooking } from "../../models/interfaces/IOutstation-booking.model";
import { IWellnessPackage } from "../../models/interfaces/IWellness-package.model";

export interface IBookingService {
    postFlightEnquiry(flightEnquiry: IFlightEnquiry): Promise<IFlightEnquiry>;
    getFlightEnquiries(): Promise<IFlightEnquiry[]>;
    getFlightEnquiryById(id: string): Promise<IFlightEnquiry | null>;
    
    postHotelBooking(hotelBooking: IHotelBooking): Promise<IHotelBooking>;
    getHotelBookings(): Promise<IHotelBooking[]>;
    getHotelBookingById(id: string): Promise<IHotelBooking | null>;
    
    postOutstationBooking(outstationBooking: IOutstationBooking): Promise<IOutstationBooking>;
    getOutstationBookings(): Promise<IOutstationBooking[]>;
    getOutstationBookingById(id: string): Promise<IOutstationBooking | null>;
    
    postDayTourEnquiry(dayTourEnquiry: IDayTourEnquiry): Promise<IDayTourEnquiry>;
    getDayTourEnquiries(): Promise<IDayTourEnquiry[]>;
    getDayTourEnquiryById(id: string): Promise<IDayTourEnquiry | null>;

    postWellnessPackage(wellnessPackage: IWellnessPackage): Promise<IWellnessPackage>;
    getWellnessPackages(): Promise<IWellnessPackage[]>;
    getWellnessPackageById(id: string): Promise<IWellnessPackage | null>;
}
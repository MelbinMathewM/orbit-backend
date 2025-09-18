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
import { IWellnessPackage } from "../../models/interfaces/IWellness-package.model";
import { IWellnessPackageRepository } from "../../repositories/interfaces/IWellness-package.repository";

@injectable()
export class BookingService implements IBookingService {
    constructor(
        @inject("IFlightEnquiryRepository") private _flightEnquiryRepository: IFlightEnquiryRepository,
        @inject("IHotelBookingRepository") private _hotelBookingRepository: IHotelBookingRepository,
        @inject("IOutstationBookingRepository") private _outstationBookingRepository: IOutstationBookingRepository,
        @inject("IDayTourEnquiryRepository") private _dayTourEnquiryRepository: IDayTourEnquiryRepository,
        @inject("IWellnessPackageRepository") private _wellnessPackageRepository: IWellnessPackageRepository,
    ) {}

    async postFlightEnquiry(flightEnquiry: IFlightEnquiry): Promise<IFlightEnquiry> {
        
        const newFlightEnquiry = await this._flightEnquiryRepository.create(flightEnquiry);

        return newFlightEnquiry;
    };

    async getFlightEnquiries(): Promise<IFlightEnquiry[]> {
        
        const flightEnquiries = await this._flightEnquiryRepository.findAll();

        return flightEnquiries;
    };

    async getFlightEnquiryById(id: string): Promise<IFlightEnquiry | null> {
        
        const flightEnquiry = await this._flightEnquiryRepository.findById(id);

        return flightEnquiry;
    }

    async postHotelBooking(hotelBooking: IHotelBooking): Promise<IHotelBooking> {

        const newHotelBooking = await this._hotelBookingRepository.create(hotelBooking);

        return newHotelBooking;
    };

    async getHotelBookings(): Promise<IHotelBooking[]> {
        
        const hotelBookings = await this._hotelBookingRepository.findAll();

        return hotelBookings;
    };

    async getHotelBookingById(id: string): Promise<IHotelBooking | null> {
        
        const hotelBooking = await this._hotelBookingRepository.findById(id);

        return hotelBooking;
    };
    
    async postOutstationBooking(outstationBooking: IOutstationBooking): Promise<IOutstationBooking> {
        
        const newOutstationBooking = await this._outstationBookingRepository.create(outstationBooking);
        
        return newOutstationBooking;
    };

    async getOutstationBookings(): Promise<IOutstationBooking[]> {
        
        const outstationBookings = await this._outstationBookingRepository.findAll();

        return outstationBookings;
    };

    async getOutstationBookingById(id: string): Promise<IOutstationBooking | null> {
        
        const outstationBooking = await this._outstationBookingRepository.findById(id);

        return outstationBooking;
    };

    async postDayTourEnquiry(dayTourEnquiry: IDayTourEnquiry): Promise<IDayTourEnquiry> {
        
        const newDayTourEnquiry = await this._dayTourEnquiryRepository.create(dayTourEnquiry);

        return newDayTourEnquiry;
    };

    async getDayTourEnquiries(): Promise<IDayTourEnquiry[]> {
        
        const dayTourEnquiries = await this._dayTourEnquiryRepository.findAll();

        return dayTourEnquiries;
    };

    async getDayTourEnquiryById(id: string): Promise<IDayTourEnquiry | null> {
        
        const dayTourEnquiry = await this._dayTourEnquiryRepository.findById(id);

        return dayTourEnquiry;
    };

    async postWellnessPackage(wellnessPackage: IWellnessPackage): Promise<IWellnessPackage> {
        
        const newWellnessPackage = await this._wellnessPackageRepository.create(wellnessPackage);

        return newWellnessPackage;
    };

    async getWellnessPackages(): Promise<IWellnessPackage[]> {
        
        const wellnessPackages = await this._wellnessPackageRepository.findAll();

        return wellnessPackages;
    };

    async getWellnessPackageById(id: string): Promise<IWellnessPackage | null> {
        
        const wellnessPackage = await this._wellnessPackageRepository.findById(id);

        return wellnessPackage;
    }
}
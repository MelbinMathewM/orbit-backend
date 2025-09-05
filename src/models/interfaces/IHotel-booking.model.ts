import { Document } from "mongoose";

export interface IHotelBooking extends Document {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    methodContact: string;
    accommodationType: string;
    starRating: string;
    roomType: string;
    adultNumber: string;
    childNumber: string;
    infantNumber: string;
    additionalRequirements: string;
}
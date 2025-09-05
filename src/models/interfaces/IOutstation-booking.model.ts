import { Document } from "mongoose";

export interface IOutstationBooking extends Document {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    methodContact: string;
    pickUp: string;
    dropOff: string;
    adultNumber: string;
    childNumber: string;
    infantNumber: string;
    numberOfDays: string;
    vehicleType: string;
    language: string;
    locations: string[];
    activities: string;
    budget: number;
    additionalRequirements: string;
}
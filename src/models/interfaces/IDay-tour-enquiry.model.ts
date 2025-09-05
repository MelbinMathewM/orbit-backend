import { Document } from "mongoose";

export interface IDayTourEnquiry extends Document {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    methodContact: string;
    pickUp: string;
    dropOff: string;
    date: Date;
    time: string;
    adultNumber: string;
    childNumber: string;
    infantNumber: string;
    vehicleType: string;
    location: string;
    activities: string;
    budget: number;
    additionalRequirements: string;
}
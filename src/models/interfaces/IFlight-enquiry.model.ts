import { Document } from "mongoose";

export interface IFlightEnquiry extends Document {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    methodContact: string;
    flightName: string;
    tripSelection: string;
    from: string;
    to: string;
    startDate: string | Date;
    endDate: string | Date;
    adultNumber: string;
    childNumber: string;
    infantNumber: string;
    additionalRequirements: string;
}
import { Document } from "mongoose";

export interface IWellnessPackage extends Document {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    packageType: string;
    numberOfDays: string;
    adultNumber: string;
    additionalRequirements: string;
}
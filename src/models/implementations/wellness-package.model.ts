import { model, Schema } from "mongoose";
import { IWellnessPackage } from "../interfaces/IWellness-package.model";

const wellnessPackageSchema = new Schema<IWellnessPackage> ({
    fullName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    packageType: {
        type: String,
        required: true
    },
    numberOfDays: {
        type: String,
        required: true
    },
    adultNumber: {
        type: String,
        required: true
    },
    additionalRequirements: {
        type: String
    }
});

const wellnessPackage = model<IWellnessPackage>("wellness-package", wellnessPackageSchema);

export default wellnessPackage;
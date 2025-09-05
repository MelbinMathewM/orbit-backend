import { Schema, model } from "mongoose";
import { IDayTourEnquiry } from "../interfaces/IDay-tour-enquiry.model";

const dayTourEnquirySchema = new Schema<IDayTourEnquiry>({
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
    methodContact: {
        type: String,
        required: true
    },
    pickUp: {
        type: String,
        required: true
    },
    dropOff: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    adultNumber: {
        type: String,
        required: true
    },
    childNumber: {
        type: String,
        default: "0"
    },
    infantNumber: {
        type: String,
        default: "0"
    },
    vehicleType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    activities: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    additionalRequirements: {
        type: String,
    }
});

const DayTourEnquiry = model<IDayTourEnquiry>("day-tour-enquiry", dayTourEnquirySchema);

export default DayTourEnquiry;
import { Schema, model } from "mongoose";
import { IFlightEnquiry } from "../interfaces/IFlight-enquiry.model";

const flightEnquirySchema = new Schema<IFlightEnquiry>({
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
    flightName: {
        type: String,
        required: true
    },
    tripSelection: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
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
    additionalRequirements: {
        type: String,
    }
});

const flightEnquiry = model<IFlightEnquiry>("flight-enquiry", flightEnquirySchema);

export default flightEnquiry;
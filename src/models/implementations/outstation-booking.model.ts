import { Schema, model } from "mongoose";
import { IOutstationBooking } from "../interfaces/IOutstation-booking.model";

const outstationBookingSchema = new Schema<IOutstationBooking>({
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
    numberOfDays: {
        type: String,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    locations: {
        type: [String],
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

const OutstationBooking = model<IOutstationBooking>("outstation-booking", outstationBookingSchema);

export default OutstationBooking;
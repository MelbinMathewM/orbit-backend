import { Schema, model } from "mongoose";
import { IHotelBooking } from "../interfaces/IHotel-booking.model";

const hotelBookingSchema = new Schema<IHotelBooking>({
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
    accommodationType: {
        type: String,
        required: true
    },
    starRating: {
        type: String,
        required: true
    },
    roomType: {
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
    additionalRequirements: {
        type: String,
    }
});

const HotelBooking = model<IHotelBooking>("hotel-booking", hotelBookingSchema);

export default HotelBooking;
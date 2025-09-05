import { IDayTourEnquiry } from "../models/interfaces/IDay-tour-enquiry.model";
import { IFlightEnquiry } from "../models/interfaces/IFlight-enquiry.model";
import { IHotelBooking } from "../models/interfaces/IHotel-booking.model";
import { IOutstationBooking } from "../models/interfaces/IOutstation-booking.model";

export const flightEnquiryValidation = (flightEnquiry: IFlightEnquiry): string => {
    const errors: string[] = [];

    if (!flightEnquiry.fullName?.trim()) errors.push("Full name is required");

    if (!flightEnquiry.emailAddress) {
        errors.push("Email address is required");
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(flightEnquiry.emailAddress)) {
            errors.push("Invalid email address");
        }
    }

    if (!flightEnquiry.phoneNumber?.trim()) errors.push("Phone number is required");
    if (!flightEnquiry.methodContact) errors.push("Preferred contact method is required");
    if (!flightEnquiry.flightName) errors.push("Flight name is required");
    if (!flightEnquiry.tripSelection) errors.push("Trip selection is required");
    if (!flightEnquiry.from) errors.push("From location is required");
    if (!flightEnquiry.to) errors.push("To location is required");
    if (!flightEnquiry.startDate) errors.push("Departure date is required");
    if (!flightEnquiry.endDate) errors.push("Return date is required");

    const adultNum = Number(flightEnquiry.adultNumber);
    if (isNaN(adultNum) || adultNum <= 0) {
        errors.push("At least one adult is required");
    }

    const childNum = Number(flightEnquiry.childNumber);
    if (!isNaN(childNum) && childNum < 0) {
        errors.push("Child number cannot be negative");
    }

    const infantNum = Number(flightEnquiry.infantNumber);
    if (!isNaN(infantNum) && infantNum < 0) {
        errors.push("Infant number cannot be negative");
    }

    if (flightEnquiry.additionalRequirements && flightEnquiry.additionalRequirements.length > 500) {
        errors.push("Additional requirements should not exceed 500 characters");
    }

    return errors[0];
};

export const hotelBookingValidation = (hotelBooking: IHotelBooking): string => {
    const errors: string[] = [];

    if (!hotelBooking.fullName?.trim()) errors.push("Full name is required");

    if (!hotelBooking.emailAddress) {
        errors.push("Email address is required");
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(hotelBooking.emailAddress)) {
            errors.push("Invalid email address");
        }
    }

    if (!hotelBooking.phoneNumber?.trim()) errors.push("Phone number is required");
    if (!hotelBooking.methodContact) errors.push("Preferred contact method is required");
    if (!hotelBooking.accommodationType) errors.push("Accommodation type is required");
    if (!hotelBooking.starRating) errors.push("Star rating is required");
    if (!hotelBooking.roomType) errors.push("Room type is required");

    const adultNum = Number(hotelBooking.adultNumber);
    if (isNaN(adultNum) || adultNum <= 0) {
        errors.push("At least one adult is required");
    }

    const childNum = Number(hotelBooking.childNumber);
    if (!isNaN(childNum) && childNum < 0) {
        errors.push("Child number cannot be negative");
    }

    const infantNum = Number(hotelBooking.infantNumber);
    if (!isNaN(infantNum) && infantNum < 0) {
        errors.push("Infant number cannot be negative");
    }

    if (hotelBooking.additionalRequirements && hotelBooking.additionalRequirements.length > 500) {
        errors.push("Additional requirements should not exceed 500 characters");
    }

    return errors[0];
};

export const outstationBookingValidation = (outstationBooking: IOutstationBooking): string => {
    const errors: string[] = [];

    if (!outstationBooking.fullName?.trim()) errors.push("Full name is required");

    if (!outstationBooking.emailAddress) {
        errors.push("Email address is required");
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(outstationBooking.emailAddress)) {
            errors.push("Invalid email address");
        }
    }

    if (!outstationBooking.phoneNumber?.trim()) errors.push("Phone number is required");
    if (!outstationBooking.methodContact) errors.push("Preferred contact method is required");
    if (!outstationBooking.pickUp) errors.push("Pick up location is required");
    if (!outstationBooking.dropOff) errors.push("Drop off location is required");
    if (!outstationBooking.numberOfDays) errors.push("Number of days is required");
    if (!outstationBooking.vehicleType) errors.push("Vehicle type is required");
    if (!outstationBooking.language) errors.push("Language is required");
    if (!outstationBooking.activities) errors.push("Activities is required");

    if(!outstationBooking.locations || outstationBooking.locations.length < 1){
        errors.push("At least one location is required");
    }

    const adultNum = Number(outstationBooking.adultNumber);
    if (isNaN(adultNum) || adultNum <= 0) {
        errors.push("At least one adult is required");
    }

    const childNum = Number(outstationBooking.childNumber);
    if (!isNaN(childNum) && childNum < 0) {
        errors.push("Child number cannot be negative");
    }

    const infantNum = Number(outstationBooking.infantNumber);
    if (!isNaN(infantNum) && infantNum < 0) {
        errors.push("Infant number cannot be negative");
    }

    if(!outstationBooking.budget || outstationBooking.budget < 0) {
        errors.push("Budget cannot be negative");
    }

    if (outstationBooking.additionalRequirements && outstationBooking.additionalRequirements.length > 500) {
        errors.push("Additional requirements should not exceed 500 characters");
    }

    return errors[0];
};

export const dayTourEnquiryValidation = (dayTourEnquiry: IDayTourEnquiry): string => {
    const errors: string[] = [];

    if (!dayTourEnquiry.fullName?.trim()) errors.push("Full name is required");

    if (!dayTourEnquiry.emailAddress) {
        errors.push("Email address is required");
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(dayTourEnquiry.emailAddress)) {
            errors.push("Invalid email address");
        }
    }

    if (!dayTourEnquiry.phoneNumber?.trim()) errors.push("Phone number is required");
    if (!dayTourEnquiry.methodContact) errors.push("Preferred contact method is required");
    if (!dayTourEnquiry.pickUp) errors.push("Pick up location is required");
    if (!dayTourEnquiry.dropOff) errors.push("Drop off location is required");
    if (!dayTourEnquiry.date) errors.push("Date is required");
    if (!dayTourEnquiry.time) errors.push("Time is required");
    if (!dayTourEnquiry.vehicleType) errors.push("Vehicle type is required");
    if(!dayTourEnquiry.location) errors.push("Location is required");
    if (!dayTourEnquiry.activities) errors.push("Activities is required");

    const adultNum = Number(dayTourEnquiry.adultNumber);
    if (isNaN(adultNum) || adultNum <= 0) {
        errors.push("At least one adult is required");
    }

    const childNum = Number(dayTourEnquiry.childNumber);
    if (!isNaN(childNum) && childNum < 0) {
        errors.push("Child number cannot be negative");
    }

    const infantNum = Number(dayTourEnquiry.infantNumber);
    if (!isNaN(infantNum) && infantNum < 0) {
        errors.push("Infant number cannot be negative");
    }

    if(!dayTourEnquiry.budget || dayTourEnquiry.budget < 0) {
        errors.push("Budget cannot be negative");
    }

    if (dayTourEnquiry.additionalRequirements && dayTourEnquiry.additionalRequirements.length > 500) {
        errors.push("Additional requirements should not exceed 500 characters");
    }

    return errors[0];
};
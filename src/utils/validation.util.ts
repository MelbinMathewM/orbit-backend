import { IFlightEnquiry } from "../models/interfaces/IFlight-enquiry.model";

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

import express from "express";
import container from "../configs/inversify.config";
import { BookingController } from "../controllers/implementations/booking.controller";

const bookingRouter = express.Router();
const bookingController = container.get(BookingController);

bookingRouter.post("/flight-enquiry", bookingController.postFlightEnquiry.bind(bookingController));
bookingRouter.get("/flight-enquiries", bookingController.getFlightEnquiries.bind(bookingController));
bookingRouter.get("/flight-enquiries/:id", bookingController.getFlightEnquiryById.bind(bookingController));

bookingRouter.post("/hotel-booking", bookingController.postHotelBooking.bind(bookingController));
bookingRouter.get("/hotel-bookings", bookingController.getHotelBookings.bind(bookingController));
bookingRouter.get("/hotel-bookings/:id", bookingController.getHotelBookingById.bind(bookingController));

bookingRouter.post("/outstation-booking", bookingController.postOutstationBooking.bind(bookingController));
bookingRouter.get("/outstation-bookings", bookingController.getOutstationBookings.bind(bookingController));
bookingRouter.get("/outstation-bookings/:id", bookingController.getOutstationBookingById.bind(bookingController));

bookingRouter.post("/day-tour-enquiry", bookingController.postDayTourEnquiry.bind(bookingController));
bookingRouter.get("/day-tour-enquiries", bookingController.getDayTourEnquiries.bind(bookingController));
bookingRouter.get("/day-tour-enquiries/:id", bookingController.getDayTourEnquiryById.bind(bookingController));

bookingRouter.post("/wellness-package", bookingController.postWellnessPackage.bind(bookingController));
bookingRouter.get("/wellness-packages", bookingController.getWellnessPackages.bind(bookingController));
bookingRouter.get("/wellness-packages/:id", bookingController.getWellnessPackageById.bind(bookingController));

export default bookingRouter;
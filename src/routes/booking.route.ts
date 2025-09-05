import express from "express";
import container from "../configs/inversify.config";
import { BookingController } from "../controllers/implementations/booking.controller";

const bookingRouter = express.Router();
const bookingController = container.get(BookingController);

bookingRouter.post("/flight-enquiry", bookingController.postFlightEnquiry.bind(bookingController));
bookingRouter.post("/hotel-booking", bookingController.postHotelBooking.bind(bookingController));
bookingRouter.post("/outstation-booking", bookingController.postOutstationBooking.bind(bookingController));
bookingRouter.post("/day-tour-enquiry", bookingController.postDayTourEnquiry.bind(bookingController));

export default bookingRouter;
import express from "express";
import container from "../configs/inversify.config";
import { BookingController } from "../controllers/implementations/booking.controller";

const bookingRouter = express.Router();
const bookingController = container.get(BookingController);

bookingRouter.post("/flight-enquiry", bookingController.postFlightEnquiry.bind(bookingController));

export default bookingRouter;
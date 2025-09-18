import "reflect-metadata";

import { Container } from "inversify";

import { IUserRepository } from "../repositories/interfaces/IUser.repository";
import { IFlightEnquiryRepository } from "../repositories/interfaces/IFlight-enquiry.repository";
import { IHotelBookingRepository } from "../repositories/interfaces/IHotel-booking.repository";
import { IOutstationBookingRepository } from "../repositories/interfaces/IOutstation-booking.repository";
import { IDayTourEnquiryRepository } from "../repositories/interfaces/IDay-tour-enquiry.repository";
import { IWellnessPackageRepository } from "../repositories/interfaces/IWellness-package.repository";

import { IAuthService } from "../services/interfaces/IAuth.service";
import { IBookingService } from "../services/interfaces/IBooking.service";

import { IAuthController } from "../controllers/interfaces/IAuth.controller";
import { IBookingController } from "../controllers/interfaces/IBooking.controller";

import { UserRepository } from "../repositories/implementations/user.repository";
import { FlightEnquiryRepository } from "../repositories/implementations/flight-enquiry.repository";
import { HotelBookingRepository } from "../repositories/implementations/hotel-booking.repository";
import { OutstationBookingRepository } from "../repositories/implementations/outstation-booking.repository";
import { DayTourEnquiryRepository } from "../repositories/implementations/day-tour-enquiry.repository";
import { WellnessPackageRepository } from "../repositories/implementations/wellness-package.repository";

import { AuthService } from "../services/implementations/auth.service";
import { BookingService } from "../services/implementations/booking.service";

import { AuthController } from "../controllers/implementations/auth.controller";
import { BookingController } from "../controllers/implementations/booking.controller";
import { IUserService } from "../services/interfaces/IUser.service";
import { UserService } from "../services/implementations/user.service";
import { IUserController } from "../controllers/interfaces/IUser.controller";
import { UserController } from "../controllers/implementations/user.controller";

const container = new Container({ defaultScope: "Singleton" });

container.bind<IUserRepository>("IUserRepository").to(UserRepository);
container.bind<IFlightEnquiryRepository>("IFlightEnquiryRepository").to(FlightEnquiryRepository);
container.bind<IHotelBookingRepository>("IHotelBookingRepository").to(HotelBookingRepository);
container.bind<IOutstationBookingRepository>("IOutstationBookingRepository").to(OutstationBookingRepository);
container.bind<IDayTourEnquiryRepository>("IDayTourEnquiryRepository").to(DayTourEnquiryRepository);
container.bind<IWellnessPackageRepository>("IWellnessPackageRepository").to(WellnessPackageRepository);

container.bind<IAuthService>(AuthService).toSelf();
container.bind<IBookingService>(BookingService).toSelf();
container.bind<IUserService>(UserService).toSelf();

container.bind<IAuthController>(AuthController).toSelf();
container.bind<IBookingController>(BookingController).toSelf();
container.bind<IUserController>(UserController).toSelf();

export default container;
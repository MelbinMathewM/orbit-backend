import { IHotelBooking } from "../../models/interfaces/IHotel-booking.model";
import { BaseRepository } from "../base.repository";
import { injectable } from "inversify";
import { IHotelBookingRepository } from "../interfaces/IHotel-booking.repository";
import HotelBooking from "../../models/implementations/hotel-booking.model";

@injectable()
export class HotelBookingRepository extends BaseRepository<IHotelBooking> implements IHotelBookingRepository {
    constructor() {
        super(HotelBooking);
    }
}
import { injectable } from "inversify";
import { BaseRepository } from "../base.repository";
import { IOutstationBooking } from "../../models/interfaces/IOutstation-booking.model";
import { IOutstationBookingRepository } from "../interfaces/IOutstation-booking.repository";
import OutstationBooking from "../../models/implementations/outstation-booking.model";

@injectable()
export class OutstationBookingRepository extends BaseRepository<IOutstationBooking> implements IOutstationBookingRepository {
    constructor() {
        super(OutstationBooking);
    }
}
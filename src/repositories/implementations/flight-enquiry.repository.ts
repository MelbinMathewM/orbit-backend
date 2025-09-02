import flightEnquiry from "../../models/implementations/flight-enquiry.model";
import { IFlightEnquiry } from "../../models/interfaces/IFlight-enquiry.model";
import { BaseRepository } from "../base.repository";
import { IFlightEnquiryRepository } from "../interfaces/IFlight-enquiry.repository";
import { injectable } from "inversify";

@injectable()
export class FlightEnquiryRepository extends BaseRepository<IFlightEnquiry> implements IFlightEnquiryRepository {
    constructor() {
        super(flightEnquiry);
    }
}
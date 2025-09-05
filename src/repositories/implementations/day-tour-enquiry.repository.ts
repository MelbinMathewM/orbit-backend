import { injectable } from "inversify";
import DayTourEnquiry from "../../models/implementations/day-tour-enquiry.model";
import { IDayTourEnquiry } from "../../models/interfaces/IDay-tour-enquiry.model";
import { BaseRepository } from "../base.repository";
import { IDayTourEnquiryRepository } from "../interfaces/IDay-tour-enquiry.repository";

@injectable()
export class DayTourEnquiryRepository extends BaseRepository<IDayTourEnquiry> implements IDayTourEnquiryRepository {
    constructor() {
        super(DayTourEnquiry);
    }
}
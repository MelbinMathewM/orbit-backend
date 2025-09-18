import { IContactData } from "../../models/interfaces/IContact-data";

export interface IUserService {
    postContactData(contactData: IContactData): Promise<void>;
}
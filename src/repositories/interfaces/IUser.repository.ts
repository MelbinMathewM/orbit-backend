import { IUser } from "../../models/interfaces/IUser.model";
import { IBaseRepository } from "../IBase.repository";

export interface IUserRepository extends IBaseRepository<IUser> {
    
}
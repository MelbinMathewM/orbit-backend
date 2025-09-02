import User from "../../models/implementations/user.model";
import { IUser } from "../../models/interfaces/IUser.model";
import { BaseRepository } from "../base.repository";
import { IUserRepository } from "../interfaces/IUser.repository";
import { injectable } from "inversify";

@injectable()
export class UserRepository extends BaseRepository<IUser> implements IUserRepository {
    constructor() {
        super(User);
    }
}
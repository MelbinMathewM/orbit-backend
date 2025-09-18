import { inject } from "inversify";
import { IUserController } from "../interfaces/IUser.controller";
import { UserService } from "../../services/implementations/user.service";
import { IUserService } from "../../services/interfaces/IUser.service";
import { Request, Response, NextFunction } from "express";
import { IContactData } from "../../models/interfaces/IContact-data";
import { HttpStatus } from "../../constants/status.constant";
import { HttpResponse } from "../../constants/response.constant";

export class UserController implements IUserController {
    constructor(
        @inject(UserService) private _userService: IUserService,
    ){}

    async postContactData(req: Request, res: Response, next: NextFunction): Promise<void> {
        try{
            const contactData: IContactData = req.body.form;

            await this._userService.postContactData(contactData);

            res.status(HttpStatus.OK).json({ message: HttpResponse.FORM_SUBMITTED });
        }catch(err){
            next(err);
        }
    }
}
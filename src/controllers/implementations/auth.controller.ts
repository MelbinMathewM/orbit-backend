import { inject } from "inversify";
import { AuthService } from "../../services/implementations/auth.service";
import { IAuthController } from "../interfaces/IAuth.controller";
import { Request, Response, NextFunction } from "express";
import { IUser } from "../../models/interfaces/IUser.model";
import { HttpStatus } from "../../constants/status.constant";
import { HttpResponse } from "../../constants/response.constant";

export class AuthController implements IAuthController {
    constructor(@inject(AuthService) private _authService: AuthService) { }

    async registerUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user: IUser = req.body;

            const newUser = await this._authService.registerUser(user);

            res.status(HttpStatus.CREATED).json({ message: HttpResponse.USER_ADDED, newUser });
        } catch (err) {
            next(err);
        }
    };

    async loginUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { email, password } = req.body;

            console.log("hoiii")

            const data = await this._authService.loginUser(email, password);

            res.cookie(`refreshToken`, data?.refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                path: "/",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            res.status(HttpStatus.OK).json({ accessToken: data?.accessToken, role: data?.role });
        } catch (err) {
            next(err);
        }
    }

    async refreshToken(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const refreshToken = req.cookies[`refreshToken`];

            const accessToken = await this._authService.refreshToken(refreshToken);

            res.status(HttpStatus.OK).json(accessToken);
        } catch (err) {
            next(err)
        }
    }
}
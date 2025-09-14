import { inject, injectable } from "inversify";
import { IAuthService } from "../interfaces/IAuth.service";
import { IUserRepository } from "../../repositories/interfaces/IUser.repository";
import { IUser } from "../../models/interfaces/IUser.model";
import { createHttpError } from "../../utils/http-error.util";
import { HttpStatus } from "../../constants/status.constant";
import { HttpResponse } from "../../constants/response.constant";
import { comparePassword, hashPassword } from "../../utils/bcrypt.util";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../../utils/jwt.util";
import { JwtPayload } from "jsonwebtoken";

@injectable()
export class AuthService implements IAuthService {
    constructor( @inject("IUserRepository") private _userRepository: IUserRepository){}

    async registerUser(user: IUser): Promise<IUser> {
        const existingUser = await this._userRepository.findOne({ email: user.email });

        if(existingUser) throw createHttpError(HttpStatus.CONFLICT, HttpResponse.USER_EXISTS);

        const hashedPassword = await hashPassword(user.password);

        user.password = hashedPassword;

        const newUser = await this._userRepository.create(user);

        if(!newUser) throw createHttpError(HttpStatus.BAD_REQUEST, HttpResponse.USER_INSERT_ERROR);

        return newUser;
    };

    async loginUser(email: string, password: string): Promise<{ accessToken: string, refreshToken: string, role: string }> {
        const user = await this._userRepository.findOne({ email });

        if(!user) throw createHttpError(HttpStatus.NOT_FOUND, HttpResponse.USER_NOT_FOUND);

        const isPasswordMatch = comparePassword(password, user.password);

        if(!isPasswordMatch) throw createHttpError(HttpStatus.UNAUTHORIZED, HttpResponse.PASSWORD_INCORRECT);

        const payload = { id: user._id, name: user.name, email: user.email, role: user.role };

        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        return { accessToken, refreshToken, role: user.role };
    };

    async refreshToken(token: string): Promise<string | null> {

        if (!token) throw createHttpError(HttpStatus.NOT_FOUND, HttpResponse.NO_REFRESH_TOKEN);

        const decoded = verifyRefreshToken(token) as JwtPayload;

        if (!decoded) throw createHttpError(HttpStatus.NO_CONTENT, HttpResponse.NO_DECODED_TOKEN);

        const payload = { id: decoded.id, name: decoded.name, email: decoded.email, role: decoded.role }

        const newAccessToken = generateAccessToken(payload);

        return newAccessToken
    }

}
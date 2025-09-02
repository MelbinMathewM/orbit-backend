import { IUser } from "../../models/interfaces/IUser.model";

export interface IAuthService {
    registerUser(user: IUser): Promise<IUser>;
    loginUser(email: string, password: string): Promise<{ accessToken: string, refreshToken: string, role: string }>;
    refreshToken(token: string): Promise<string | null>;
}
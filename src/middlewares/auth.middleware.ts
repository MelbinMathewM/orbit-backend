import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt.util";
import { HttpResponse } from "../constants/response.constant";
import { HttpStatus } from "../constants/status.constant";
import { JwtPayload } from "jsonwebtoken";

interface AuthRequest extends Request {
    user?: any;
}

export const authenticate =
    (role: "admin" | "user") =>
        async (req: AuthRequest, res: Response, next: NextFunction) => {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res
                    .status(HttpStatus.UNAUTHORIZED)
                    .json({ message: HttpResponse.NO_ACCESS_TOKEN });
            }

            const accessToken = authHeader.split(" ")[1];
            const decoded = verifyAccessToken(accessToken) as JwtPayload;

            if (!decoded) {
                return res
                    .status(HttpStatus.UNAUTHORIZED)
                    .json({ message: HttpResponse.ACCESS_TOKEN_EXPIRED });
            }

            if (decoded.role !== role) {
                return res.status(HttpStatus.FORBIDDEN).json({ message: HttpResponse.ACCESS_DENIED });
            }

            req.user = decoded;
            next();
        };

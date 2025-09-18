import express from "express";
import container from "../configs/inversify.config";
import { AuthController } from "../controllers/implementations/auth.controller";

const authRouter = express.Router();
const authController = container.get(AuthController);

authRouter.post("/register", authController.registerUser.bind(authController));
authRouter.post("/login", authController.loginUser.bind(authController));
authRouter.post("/refresh-token", authController.refreshToken.bind(authController));

export default authRouter;
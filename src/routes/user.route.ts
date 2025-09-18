import { Router } from "express";
import container from "../configs/inversify.config";
import { UserController } from "../controllers/implementations/user.controller";

const userRouter = Router();
const userController = container.get(UserController);

userRouter.post("/contact", userController.postContactData.bind(userController));

export default userRouter;
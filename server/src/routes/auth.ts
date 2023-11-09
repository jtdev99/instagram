import express from "express";

import { authController } from "../controllers";
import { authMiddleware } from "../middlewares";

const authRouter = express.Router();

authRouter.post("/login", authMiddleware.login, authController.login);
authRouter.post("/register", authMiddleware.register, authController.register);

export default authRouter;

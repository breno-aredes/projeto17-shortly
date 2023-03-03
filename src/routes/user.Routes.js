import { Router } from "express";
import { getProfile } from "../controllers/userController.js";
import { authToken } from "../middleware/authValidation.js";
import { validateUser } from "../middleware/validateUser.js";

export const userRouter = Router();

userRouter.get("/users/me", authToken, validateUser, getProfile);

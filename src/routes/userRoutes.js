//userSchema
import { createUser } from "../controllers/userController.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { userValidate } from "../middleware/validateUser.js";
import { userSchema } from "../models/userModel.js";

export const userRouter = Router();

userRouter.post(
  "/signup",
  validateSchema(userSchema),
  userValidate,
  createUser
);

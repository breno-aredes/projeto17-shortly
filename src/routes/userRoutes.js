import { signIn, signUp } from "../controllers/userController.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { loginValidate, signUpValidate } from "../middleware/validateUser.js";
import { signInSchema, signUpSchema } from "../models/userModels.js";

export const userRouter = Router();

userRouter.post(
  "/signup",
  validateSchema(signUpSchema),
  signUpValidate,
  signUp
);
userRouter.post("/signin", validateSchema(signInSchema), loginValidate, signIn);

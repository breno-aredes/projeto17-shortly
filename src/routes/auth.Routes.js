import { signIn, signUp } from "../controllers/userController.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { loginValidate, signUpValidate } from "../middleware/authValidation.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";

export const userRouter = Router();

userRouter.post(
  "/signup",
  validateSchema(signUpSchema),
  signUpValidate,
  signUp
);
userRouter.post("/signin", validateSchema(signInSchema), loginValidate, signIn);

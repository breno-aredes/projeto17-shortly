import { signIn, signUp } from "../controllers/authController.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { loginValidate, signUpValidate } from "../middleware/authValidation.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";

export const authRouter = Router();

authRouter.post(
  "/signup",
  validateSchema(signUpSchema),
  signUpValidate,
  signUp
);
authRouter.post("/signin", validateSchema(signInSchema), loginValidate, signIn);

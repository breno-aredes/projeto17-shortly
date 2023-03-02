import { Router } from "express";
import { shortenUrl } from "../controllers/urlsController.js";
import { authToken } from "../middleware/authValidation.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { validateUrl } from "../middleware/validateUrl.js";
import { urlSchema } from "../models/urlsModels.js";

export const urlRouter = Router();

urlRouter.post(
  "/urls/shorten",
  authToken,
  validateSchema(urlSchema),
  validateUrl,
  shortenUrl
);

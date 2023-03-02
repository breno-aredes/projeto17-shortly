import { Router } from "express";
import { shortenUrl } from "../controllers/urlsController";
import { authToken } from "../middleware/authValidation.js";
import { validateSchema } from "../middleware/validateSchema";
import { validateUrl } from "../middleware/validateUrl.js";
import { urlSchema } from "../models/urlsModels";

const urlRouter = Router();

urlRouter.post(
  "/urls/shorten",
  authToken,
  validateSchema(urlSchema),
  validateUrl,
  shortenUrl
);

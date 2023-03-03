import { Router } from "express";
import {
  deleteUrl,
  getUrlById,
  openShortUrl,
  shortenUrl,
} from "../controllers/urlController.js";
import { authToken } from "../middleware/authValidation.js";
import { validateSchema } from "../middleware/validateSchema.js";
import {
  validateOpenUrl,
  validateToDelete,
  validateUrl,
  validateUrlById,
} from "../middleware/validateUrl.js";
import { urlSchema } from "../schemas/urlSchema.js";

export const urlRouter = Router();

urlRouter.get("/urls/:id", validateUrlById, getUrlById);
urlRouter.get("/urls/open/:shortUrl", validateOpenUrl, openShortUrl);
urlRouter.post(
  "/urls/shorten",
  authToken,
  validateSchema(urlSchema),
  validateUrl,
  shortenUrl
);
//aproveitando as rotas criadas anteriormente para fazer o delete.
urlRouter.delete(
  "/urls/:id",
  authToken,
  validateUrl,
  validateToDelete,
  deleteUrl
);

import { Router } from "express";
import { ranking } from "../controllers/rankController.js";

export const rankRouter = Router();

rankRouter.get("/ranking", ranking);

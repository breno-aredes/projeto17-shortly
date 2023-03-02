import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRoutes.js";
import { urlRouter } from "./routes/urlRoutes.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use([userRouter, urlRouter]);

server.listen(process.env.PORT, console.log("servidor conectado na PORT"));

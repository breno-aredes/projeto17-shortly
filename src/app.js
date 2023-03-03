import express from "express";
import cors from "cors";
import { authRouter } from "./routes/auth.Routes.js";
import { urlRouter } from "./routes/url.Routes.js";
import { userRouter } from "./routes/user.Routes.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use([authRouter, urlRouter, userRouter]);

server.listen(process.env.PORT, console.log("servidor conectado na PORT"));

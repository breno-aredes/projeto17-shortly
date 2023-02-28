import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRoutes.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use([userRouter]);

server.listen(process.env.PORT, console.log("servidor conectado na PORT"));

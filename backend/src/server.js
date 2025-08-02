import express, { urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import departmentRouter from "./routers/router_department.js";
import employeRouter from "./routers/router_employe.js";
const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(urlencoded({ extended: false }));
server.use("/department", departmentRouter);
server.use("/employe", employeRouter);

export default server;

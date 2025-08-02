import { Router } from "express";
import {
  create,
  departmentDelete,
  getAll,
  getId,
  update,
} from "../controllers/controller_department.js";

const departmentRouter = Router();

departmentRouter.post("/", create);
departmentRouter.get("/", getAll);
departmentRouter.get("/:id", getId);
departmentRouter.put("/:id", update);
departmentRouter.delete("/:id", departmentDelete);

export default departmentRouter;

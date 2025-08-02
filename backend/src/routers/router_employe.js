import { Router } from "express";
import {
  create,
  employeDelete,
  getAll,
  getId,
  update,
} from "../controllers/controller_employe.js";

const employeRouter = Router();

employeRouter.post("/", create);
employeRouter.get("/", getAll);
employeRouter.get("/:id", getId);
employeRouter.put("/:id", update);
employeRouter.delete("/:id", employeDelete);

export default employeRouter;

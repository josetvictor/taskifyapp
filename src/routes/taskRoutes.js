import { Router } from "express";
import taskController from "../controllers/taskController.js";

const TaskRoute = Router();

TaskRoute.get("/", taskController.findAll);
TaskRoute.get("/:id", taskController.findTask);
TaskRoute.post("/", taskController.addTask);
TaskRoute.delete("/:id", taskController.deleteTask);

export default TaskRoute;
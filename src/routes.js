import { Router } from "express";
import usersController from "./Controllers/userController.js";
import taskController from "./Controllers/taskController.js";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

routes.get("/users", usersController.findAll);
routes.get("/users/:id", usersController.findUser);
routes.post("/users", usersController.addUser);
routes.delete("/users/:id", usersController.deleteUser);

routes.get("/tasks", taskController.findAll);
routes.get("/tasks/:id", taskController.findTask);
routes.post("/tasks", taskController.addTask);
routes.delete("/tasks/:id", taskController.deleteTask);

export default routes;
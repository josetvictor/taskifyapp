import { Router } from "express";
import TaskRoute from "../routes/taskRoutes.js";
import UserRoutes from "../routes/userRoutes.js";

const routesConfig = Router();

routesConfig.get("/v1/", (req, res) => {
  return res.json({ message: "API is running!" });
});

routesConfig.use("/v1/tasks", TaskRoute);
routesConfig.use("/v1/users", UserRoutes);

export default routesConfig;

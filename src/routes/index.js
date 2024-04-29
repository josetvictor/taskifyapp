import { Router } from "express";
import TaskRoute from "../routes/taskRoutes.js";
import UserRoutes from "../routes/userRoutes.js";

const routesConfig = Router();

/**
 * @swagger
 * /v1:
 *   get:
 *     description: Retorna mensagem de boas-vindas
 *     responses:
 *       200:
 *         description: mensagem de boas-vindas
 */
routesConfig.get("/v1", (req, res) => {
  return res.json({ message: "API is running!" });
});

routesConfig.use("/v1/tasks", TaskRoute);
routesConfig.use("/v1/users", UserRoutes);

export default routesConfig;

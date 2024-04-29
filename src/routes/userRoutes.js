import { Router } from "express";
import userController from "../controllers/userController.js";

const UserRoute = Router();

UserRoute.get("/", userController.findAll);
UserRoute.get("/:id", userController.findUser);
UserRoute.post("/", userController.registerUser);
UserRoute.post("/login", userController.singInUser);
UserRoute.delete("/:id", userController.deleteUser);

export default UserRoute;
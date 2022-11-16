import { usersRoutes } from "./users.routes";
import { Router } from "express";
import { projectsRoutes } from "./projects.routes";

export const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/projects", projectsRoutes);

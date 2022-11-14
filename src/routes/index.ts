import { usersRoutes } from "./users.routes";
import { Router } from "express";

export const routes = Router();

routes.use(usersRoutes);

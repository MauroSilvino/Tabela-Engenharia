import { addressesRoutes } from "./addresses.routes";
import { usersRoutes } from "./users.routes";
import { Router } from "express";
import { projectsRoutes } from "./projects.routes";
import { itemsRoutes } from "./items.routes";
import axios from "axios";

export const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/addresses", addressesRoutes);
routes.use("/projects", projectsRoutes);
routes.use("/items", itemsRoutes);

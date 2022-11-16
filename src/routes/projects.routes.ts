import { CreateProjectController } from "./../modules/projects/useCases/createProject/CreateProjectController";
import { Router } from "express";

export const projectsRoutes = Router();

const createProjectController = new CreateProjectController();

projectsRoutes.post("/", createProjectController.handle);

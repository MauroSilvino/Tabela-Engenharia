import { Router } from "express";
import { CreateCustomItemController } from "../modules/customItems/useCases/createCustomItem/CreateCustomItemController";

const createCustomItemController = new CreateCustomItemController();

export const customItemsRoutes = Router();
customItemsRoutes.post("/", createCustomItemController.handle);

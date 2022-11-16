import { CreateItemController } from "./../modules/items/useCases/createItem/CreateItemController";
import { Router } from "express";

export const itemsRoutes = Router();

const createItemController = new CreateItemController();

itemsRoutes.post("/", createItemController.handle);

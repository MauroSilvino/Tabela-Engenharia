import { CreateAddressController } from "../modules/addresses/useCases/createAddress/CreateAddressController";
import { Router } from "express";

export const addressesRoutes = Router();

const createAddressController = new CreateAddressController();

addressesRoutes.post("/", createAddressController.handle);

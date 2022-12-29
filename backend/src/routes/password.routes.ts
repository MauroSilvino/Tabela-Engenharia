import { Router } from "express";
import { SendPasswordRecoveryMailController } from "../modules/users/useCases/sendPasswordRecoveryMail/SendPasswordRecoveryMailController";

export const passwordRoutes = Router();

const sendPasswordRecoveryMailController =
  new SendPasswordRecoveryMailController();

passwordRoutes.post("/recovery", sendPasswordRecoveryMailController.handle);

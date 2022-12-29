import { Router } from "express";
import { ResetPasswordController } from "../modules/users/useCases/resetPassword/ResetPasswordController";
import { SendPasswordRecoveryMailController } from "../modules/users/useCases/sendPasswordRecoveryMail/SendPasswordRecoveryMailController";

export const passwordRoutes = Router();

const sendPasswordRecoveryMailController =
  new SendPasswordRecoveryMailController();
const resetPasswordController = new ResetPasswordController();

passwordRoutes.post("/recovery", sendPasswordRecoveryMailController.handle);
passwordRoutes.post("/reset", resetPasswordController.handle);

import { CreateUserController } from "./../modules/users/useCases/createUser/CreateUserController";
import { Router } from "express";
import { AuthenticateUserController } from "../modules/users/useCases/authenticateUser/AuthenticateUserController";

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.post("/authenticate", authenticateUserController.handle);

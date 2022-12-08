import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCustomItemUseCase } from "./CreateCustomItemUseCase";

export class CreateCustomItemController {
  async handle(req: Request, res: Response) {
    const data = req.body;

    const createCustomItemUseCase = container.resolve(CreateCustomItemUseCase);

    const result = await createCustomItemUseCase.execute(data);

    return res.status(201).json(result);
  }
}
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateItemUseCase } from "./CreateItemUseCase";

export class CreateItemController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const createItemUseCase = container.resolve(CreateItemUseCase);

    const result = await createItemUseCase.execute(data);

    return res.status(201).json(result);
  }
}

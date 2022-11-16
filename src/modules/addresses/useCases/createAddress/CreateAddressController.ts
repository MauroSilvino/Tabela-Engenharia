import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

export class CreateAddressController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const createAddressUseCase = container.resolve(CreateAddressUseCase);

    const result = await createAddressUseCase.execute(data);

    return res.status(201).json(result);
  }
}

import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindItemsByDescriptionUseCase } from "./FindItemsByDescriptionUseCase";

export class FindItemsByDescriptionController {
  async handle(req: Request, res: Response) {
    const { description } = req.query;

    const findItemsByDescriptionUseCase = container.resolve(
      FindItemsByDescriptionUseCase
    );

    const result = await findItemsByDescriptionUseCase.execute(
      description as string
    );

    return res.status(200).json(result);
  }
}

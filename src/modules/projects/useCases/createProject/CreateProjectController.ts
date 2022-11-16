import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

export class CreateProjectController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, authorId, value } = req.body;

    const createProjectUseCase = container.resolve(CreateProjectUseCase);

    const result = await createProjectUseCase.execute({
      name,
      authorId,
      value,
    });

    return res.status(201).json(result);
  }
}

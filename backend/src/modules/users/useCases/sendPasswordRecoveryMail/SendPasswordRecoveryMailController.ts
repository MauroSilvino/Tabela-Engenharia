import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendPasswordRecoveryMailUseCase } from "./SendPasswordRecoveryMailUseCase";

export class SendPasswordRecoveryMailController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendRecoveryPasswordMailUseCase = container.resolve(
      SendPasswordRecoveryMailUseCase
    );

    await sendRecoveryPasswordMailUseCase.execute(email);

    return res.status(201).send();
  }
}

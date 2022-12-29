import { resolve } from "node:path";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/container/providers/IDateProvider";
import { IMailProvider } from "../../../../shared/container/providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../tokens/repositories/IUsersTokensRepository";
import { randomUUID } from "node:crypto";

@injectable()
class SendPasswordRecoveryMailUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider,
    @inject("MailProvider")
    private mailProvider: IMailProvider
  ) {}

  async execute(email: string): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    const templatePath = resolve(
      __dirname,
      "..",
      "..",
      "views",
      "emails",
      "passwordRecovery.hbs"
    );

    if (!user) throw new AppError("User does not exists.");

    const token = randomUUID();

    const expiresDate = this.dateProvider.addHours(3);

    await this.usersTokensRepository.create({
      token,
      userId: user.id,
      expiresDate,
    });

    const variables = {
      name: user.name,
      link: `http://localhost:5173/resetPassword?token=${token}`,
    };

    await this.mailProvider.sendMail(
      email,
      "Recuperacao de senha",
      variables,
      templatePath
    );
  }
}

export { SendPasswordRecoveryMailUseCase };

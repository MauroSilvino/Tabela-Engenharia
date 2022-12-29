import { User } from "@prisma/client";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/container/providers/IDateProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../tokens/repositories/IUsersTokensRepository";

interface IRequest {
  token: string;
  password: string;
}

@injectable()
export class ResetPasswordUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.usersTokensRepository.findByToken(token);

    if (!userToken) throw new AppError("Invalid token!");

    const tokenAlreadyExpired = this.dateProvider.beforeComparison(
      userToken.expiresDate,
      this.dateProvider.dateNow()
    );

    if (tokenAlreadyExpired) throw new AppError("Token expired!");

    const user = (await this.usersRepository.findById(
      userToken.userId
    )) as User;

    user.password = await hash(password, 8);

    await this.usersRepository.update(user);
    await this.usersTokensRepository.deleteById(userToken.id);
  }
}

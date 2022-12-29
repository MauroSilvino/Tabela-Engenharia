import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../tokens/repositories/IUsersTokensRepository";

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({ email, password }: IAuthenticateUserDTO) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new AppError("Email or password incorrect.");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError("Email or password incorrect.");

    const token = sign(
      {
        userId: user.id,
      },
      "181da4333639dd6bd6ba49bf865a5a2d",
      {
        expiresIn: "1h",
      }
    );

    await this.usersTokensRepository.create({
      token,
      userId: user.id,
      expiresDate: this.dateProvider.addDays(7),
    });

    return { token };
  }
}

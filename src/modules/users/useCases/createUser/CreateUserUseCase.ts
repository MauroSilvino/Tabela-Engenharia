import { ICreateUserDTO } from "./../../dtos/ICreateUserDTO";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ cellphone, email, name, password }: ICreateUserDTO) {
    const emailAlreadyInUse = await this.usersRepository.findByEmail(email);

    if (emailAlreadyInUse) {
      throw new AppError("A user with this email already exists");
    }

    return await this.usersRepository.create({
      cellphone,
      email,
      name,
      password,
    });
  }
}

import { ICreateUserDTO } from "./../../dtos/ICreateUserDTO";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ cellphone, email, name, password }: ICreateUserDTO) {
    return await this.usersRepository.create({
      cellphone,
      email,
      name,
      password,
    });
  }
}

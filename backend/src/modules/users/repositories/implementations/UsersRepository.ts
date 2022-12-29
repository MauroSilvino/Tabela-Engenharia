import { User } from "@prisma/client";
import { IUsersRepository } from "./../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { hash } from "bcrypt";
import { prismaClient } from "../../../../database/prismaClient";

export class UsersRepository implements IUsersRepository {
  async create({
    name,
    cellphone,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const hashPassword = await hash(password, 12);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        cellphone,
        password: hashPassword,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: number): Promise<User | null> {
    return await prismaClient.user.findUnique({ where: { id } });
  }

  async update(user: User): Promise<User> {
    return await prismaClient.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  }
}

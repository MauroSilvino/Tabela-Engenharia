import { UserToken } from "@prisma/client";
import { prismaClient } from "../../../../../database/prismaClient";
import { ICreateUserTokenDTO } from "../../../dtos/ICreateUserTokenDTO";
import { IUsersTokensRepository } from "../IUsersTokensRepository";

export class UsersTokensRepository implements IUsersTokensRepository {
  async create(data: ICreateUserTokenDTO): Promise<UserToken> {
    const { expiresDate, token, userId } = data;

    return await prismaClient.userToken.create({
      data: {
        expiresDate,
        token,
        userId,
      },
    });
  }

  async findByUserIdAndToken(
    userId: number,
    token: string
  ): Promise<UserToken | null> {
    return await prismaClient.userToken.findFirst({
      where: {
        userId,
        token,
      },
    });
  }

  async deleteById(id: number): Promise<void> {
    await prismaClient.userToken.delete({ where: { id } });
  }

  async findByToken(token: string): Promise<UserToken | null> {
    return await prismaClient.userToken.findFirst({ where: { token } });
  }
}

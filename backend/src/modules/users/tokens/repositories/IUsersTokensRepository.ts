import { UserToken } from "@prisma/client";
import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDTO";

export interface IUsersTokensRepository {
  create(data: ICreateUserTokenDTO): Promise<UserToken>;
  findByUserIdAndToken(
    userId: number,
    token: string
  ): Promise<UserToken | null>;
  deleteById(id: number): Promise<void>;
  findByToken(token: string): Promise<UserToken | null>;
}

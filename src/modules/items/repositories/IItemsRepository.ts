import { Item } from "@prisma/client";
import { ICreateItemDTO } from "../dtos/ICreateItemDTO";

export interface IItemsRepository {
  create(data: ICreateItemDTO): Promise<Item>;
}

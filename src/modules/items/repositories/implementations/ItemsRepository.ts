import { ICreateItemDTO } from "./../../dtos/ICreateItemDTO";
import { IItemsRepository } from "../IItemsRepository";
import { prismaClient } from "../../../../database/prismaClient";

export class ItemsRepository implements IItemsRepository {
  async create({
    description,
    id,
    unity,
    value,
    projectId,
    quantity,
  }: ICreateItemDTO) {
    const item = await prismaClient.item.create({
      data: {
        description,
        id,
        projectId,
        quantity,
        unity,
        value,
      },
    });

    return item;
  }
}

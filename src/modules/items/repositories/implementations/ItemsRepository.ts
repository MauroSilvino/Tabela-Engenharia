import { ICreateItemDTO } from "./../../dtos/ICreateItemDTO";
import { IItemsRepository } from "../IItemsRepository";
import { prismaClient } from "../../../../database/prismaClient";
import { Item } from "@prisma/client";

export class ItemsRepository implements IItemsRepository {
  async create({
    description,
    id,
    unity,
    value,
    projectId,
    quantity,
    categoryId,
  }: ICreateItemDTO) {
    const item = await prismaClient.item.create({
      data: {
        description,
        id,
        projectId,
        quantity,
        unity,
        value,
        categoryId,
      },
    });

    return item;
  }

  async findItemsByDescription(description: string): Promise<Item[]> {
    const searchParams = description
      .split(" ")
      .map((str) => "+" + str)
      .join(" ");

    return await prismaClient.item.findMany({
      where: {
        description: {
          search: searchParams,
        },
      },
    });
  }
}

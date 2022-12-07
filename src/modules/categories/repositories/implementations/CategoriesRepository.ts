import { Category } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { ICategoriesRepository } from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  async create(name: string): Promise<Category> {
    return await prismaClient.category.create({
      data: {
        name,
      },
    });
  }
}

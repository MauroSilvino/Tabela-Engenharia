import { Category } from "@prisma/client";

export interface ICategoriesRepository {
  create(description: string): Promise<Category>;
}

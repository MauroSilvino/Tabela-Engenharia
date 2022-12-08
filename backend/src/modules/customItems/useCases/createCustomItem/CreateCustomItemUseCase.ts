import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { ICreateCustomItemDTO } from "../../dtos/ICreateCustomItemDTO";

export class CreateCustomItemUseCase {
  async execute({
    authorId,
    description,
    projectId,
    quantity,
    unity,
    value,
  }: ICreateCustomItemDTO) {
    const itemAlreadyExists: [] = await prismaClient.$queryRawUnsafe(
      `SELECT * FROM custom_items_${authorId}_${projectId} WHERE description = "${description}";`
    );

    if (itemAlreadyExists.length > 0) {
      throw new AppError("Item with this name already exists.");
    }

    const item = await prismaClient.$executeRawUnsafe(
      `INSERT INTO custom_items_${authorId}_${projectId} (
        description,
        unity,
        quantity,
        value,
        user_id,
        project_id
      ) VALUES (
        "${description}",
        "${unity}",
        "${quantity}",
        ${value},
        ${authorId},
        ${projectId}
      );`
    );

    return item;
  }
}

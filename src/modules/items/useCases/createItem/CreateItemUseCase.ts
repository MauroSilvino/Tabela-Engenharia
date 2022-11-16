import { ICreateItemDTO } from "./../../dtos/ICreateItemDTO";
import { ItemsRepository } from "./../../repositories/implementations/ItemsRepository";
import { inject, injectable } from "tsyringe";
import { Item } from "@prisma/client";

@injectable()
export class CreateItemUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRepository: ItemsRepository
  ) {}

  async execute({
    description,
    id,
    projectId,
    quantity,
    unity,
    value,
  }: ICreateItemDTO): Promise<Item> {
    const item = await this.itemsRepository.create({
      id,
      quantity,
      unity,
      value,
      description,
      projectId,
    });

    return item;
  }
}

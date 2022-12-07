import { inject, injectable } from "tsyringe";
import { IItemsRepository } from "../../repositories/IItemsRepository";

@injectable()
export class FindItemsByDescriptionUseCase {
  constructor(
    @inject("ItemsRepository")
    private itemsRepository: IItemsRepository
  ) {}

  async execute(description: string) {
    return await this.itemsRepository.findItemsByDescription(description);
  }
}

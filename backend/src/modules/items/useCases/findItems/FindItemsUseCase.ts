import {inject, injectable} from "tsyringe";
import {IItemsRepository} from "../../repositories/IItemsRepository";

@injectable()
export class FindItemsUseCase {
	constructor(
		@inject("ItemsRepository")
		private itemRepository: IItemsRepository
	) {
	}
	
	async execute(description?: string, category?: string) {
		if (description) {
			return await this.itemRepository.findItemsByDescription(description);
		}
		
		if (category) {
			return await this.itemRepository.findItemsByCategory(category);
		}
	}
}
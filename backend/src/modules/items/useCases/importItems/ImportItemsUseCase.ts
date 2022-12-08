import {inject, injectable} from "tsyringe";
import {ICategoriesRepository} from "../../../categories/repositories/ICategoriesRepository";
import {IItemsRepository} from "../../repositories/IItemsRepository";

interface IData {
	"codigo 13a edição": string;
	descrição: string;
	unid: string;
	"pr ago/2012": number;
}

@injectable()
export class ImportItemsUseCase {
	constructor(
		@inject("ItemsRepository")
		private itemsRepository: IItemsRepository,
		@inject("CategoriesRepository")
		private categoriesRepository: ICategoriesRepository
	) {
	}
	
	async create(data: IData[]) {
		let categoryId = 0;
		
		for (const row of data) {
			const isCategory =
				!row["codigo 13a edição"] &&
				row.descrição &&
				!row.unid &&
				!row["pr ago/2012"];
			
			const isItem =
				row["codigo 13a edição"] &&
				row.descrição &&
				row.unid &&
				row["pr ago/2012"];
			
			if (isCategory) {
				const category = await this.categoriesRepository.create(row.descrição);
				categoryId = category.id;
			}
			
			if (isItem) {
				const rowId = row["codigo 13a edição"]
				.replaceAll(".", "")
				.replaceAll("-", "");
				
				const onlyDigit = /^\d+$/;
				
				if (onlyDigit.test(rowId)) {
					try {
						await this.itemsRepository.create({
							description: row.descrição,
							id: row["codigo 13a edição"],
							unity: row.unid,
							value: row["pr ago/2012"],
							categoryId,
						});
					} catch (err) {
						console.log(err);
					}
				}
			}
		}
	}
}

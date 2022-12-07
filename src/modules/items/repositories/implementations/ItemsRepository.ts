import {ICreateItemDTO} from "./../../dtos/ICreateItemDTO";
import {IItemsRepository} from "../IItemsRepository";
import {prismaClient} from "../../../../database/prismaClient";
import {Item} from "@prisma/client";

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
		return await prismaClient.item.create({
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
	}
	
	async findItemsByDescription(description: string): Promise<Item[]> {
		return await prismaClient.item.findMany({
			where: {
				description: {
					search: this.prepareToFullTextSearch(description),
				},
			},
			include: {
				category: {
					select: {
						name: true
					}
				}
			}
		});
	}
	
	async findItemsByCategory(category: string): Promise<Item[]> {
		const categories = await prismaClient.category.findMany({
			where: {
				name: {
					search: this.prepareToFullTextSearch(category),
				},
			},
		});
		
		console.log('categories', categories);
		
		const arrayOfArrayOfItems: Item[][] = [];
		
		for (const category of categories) {
			arrayOfArrayOfItems.push(
				await prismaClient.item.findMany({
					where: {
						categoryId: category.id,
					},
					include: {
						category: {
							select: {
								name: true,
							},
						},
					},
				})
			);
		}
		
		const items: Item[] = [];
		for (const itemsArray of arrayOfArrayOfItems) {
			items.push(...itemsArray);
		}
		
		return items;
	}
	
	private prepareToFullTextSearch(searchString: string) {
		return searchString
		.split(" ")
		.map((str) => "+" + str)
		.join(" ");
	}
}

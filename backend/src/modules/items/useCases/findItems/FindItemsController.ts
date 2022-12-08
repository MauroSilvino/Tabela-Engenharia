import {Request, Response} from "express";
import {container} from "tsyringe";
import {FindItemsUseCase} from "./FindItemsUseCase";

export class FindItemsController {
	async handle(req: Request, res: Response) {
		const {category, description} = req.query;
		
		const findItemsUseCase = container.resolve(FindItemsUseCase);
		
		const result = await findItemsUseCase.execute(description as string, category as string);
		
		return res.status(200).json(result);
	}
}
import { ICreateItemDTO } from "./../../dtos/ICreateItemDTO";
import { inject, injectable } from "tsyringe";
import { ItemsRepository } from "../../repositories/implementations/ItemsRepository";

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
    private itemsRepository: ItemsRepository
  ) {}

  async create(data: IData[]) {
    data.forEach(async (row) => {
      if (
        row["codigo 13a edição"] &&
        row["codigo 13a edição"] &&
        row.unid &&
        row["pr ago/2012"]
      ) {
        const rowId = row["codigo 13a edição"]
          .replaceAll(".", "")
          .replaceAll("-", "");

        if (/^\d+$/.test(rowId)) {
          await this.itemsRepository.create({
            description: row.descrição,
            id: row["codigo 13a edição"],
            unity: row.unid,
            value: row["pr ago/2012"],
          });
        }
      }
    });
  }
}

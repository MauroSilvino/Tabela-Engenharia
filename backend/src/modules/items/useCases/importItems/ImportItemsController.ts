import { Request, Response } from "express";
import { container } from "tsyringe";
import XLSX from "xlsx";
import { ImportItemsUseCase } from "./ImportItemsUseCase";

interface IData {
  "codigo 13a edição": string;
  descrição: string;
  unid: string;
  "pr ago/2012": number;
}

export class ImportItemsController {
  async handle(req: Request, res: Response) {
    let path = req.file?.path;
    var workbook = XLSX.readFile(path!);
    var sheet_name_list = workbook.SheetNames;
    let jsonData: IData[] = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheet_name_list[0]]
    );

    const importItemsUseCase = container.resolve(ImportItemsUseCase);

    importItemsUseCase.create(jsonData);

    return res.status(201).send();
  }
}

import { Address } from "@prisma/client";
import { ICreateAddressDTO } from "../dtos/ICreateAddressDTO";

export interface IAddressesRepository {
  create(data: ICreateAddressDTO): Promise<Address>;
}

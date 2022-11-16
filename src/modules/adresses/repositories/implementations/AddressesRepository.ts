import { Address } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IAddressesRepository } from "../IAddressesRepository";

export class AddressesRepository implements IAddressesRepository {
  async create({
    city,
    country,
    neighboorhood,
    number,
    state,
    street,
    userId,
  }: ICreateAddressDTO): Promise<Address> {
    const address = await prismaClient.address.create({
      data: {
        city,
        country,
        neighboorhood,
        number,
        street,
        state,
        userId,
      },
    });

    return address;
  }
}

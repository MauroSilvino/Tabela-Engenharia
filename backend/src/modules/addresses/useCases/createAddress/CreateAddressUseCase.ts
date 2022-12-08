import { Address } from "@prisma/client";
import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { AddressesRepository } from "../../repositories/implementations/AddressesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateAddressUseCase {
  constructor(
    @inject("AddressesRepository")
    private addressesRepository: AddressesRepository
  ) {}

  async execute({
    city,
    country,
    neighboorhood,
    number,
    state,
    street,
    userId,
  }: ICreateAddressDTO): Promise<Address> {
    const address = await this.addressesRepository.create({
      city,
      country,
      neighboorhood,
      number,
      state,
      street,
      userId,
    });

    return address;
  }
}

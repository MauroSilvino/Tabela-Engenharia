import { container } from "tsyringe";
import { AddressesRepository } from "../../modules/addresses/repositories/implementations/AddressesRepository";
import { IItemsRepository } from "../../modules/items/repositories/IItemsRepository";
import { ItemsRepository } from "../../modules/items/repositories/implementations/ItemsRepository";
import { ProjectsRepository } from "../../modules/projects/repositories/implementations/ProjectsRepository";
import { IProjectsRepository } from "../../modules/projects/repositories/IProjectsRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { IAddressesRepository } from "../../modules/addresses/repositories/IAddressesRepository";
import { ICategoriesRepository } from "../../modules/categories/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/categories/repositories/implementations/CategoriesRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IProjectsRepository>(
  "ProjectsRepository",
  ProjectsRepository
);

container.registerSingleton<IItemsRepository>(
  "ItemsRepository",
  ItemsRepository
);

container.registerSingleton<IAddressesRepository>(
  "AddressesRepository",
  AddressesRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

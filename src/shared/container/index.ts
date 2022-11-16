import { container } from "tsyringe";
import { IItemsRepository } from "../../modules/items/repositories/IItemsRepository";
import { ItemsRepository } from "../../modules/items/repositories/implementations/ItemsRepository";
import { ProjectsRepository } from "../../modules/projects/repositories/implementations/ProjectsRepository";
import { IProjectsRepository } from "../../modules/projects/repositories/IProjectsRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

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

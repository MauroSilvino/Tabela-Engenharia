import { ProjectsRepository } from "./../../repositories/implementations/ProjectsRepository";
import { inject, injectable } from "tsyringe";
import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { Project } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";

@injectable()
export class CreateProjectUseCase {
  constructor(
    @inject("ProjectsRepository")
    private projectsRepository: ProjectsRepository
  ) {}

  async execute({
    name,
    authorId,
    value,
  }: ICreateProjectDTO): Promise<Project> {
    const projectAlreadyExists = await this.projectsRepository.findByName(name);

    if (projectAlreadyExists)
      throw new AppError("A project with this name already exists.", 401);

    const project = await this.projectsRepository.create({
      name,
      authorId,
      value,
    });

    return project;
  }
}

import { ICreateProjectDTO } from "./../dtos/ICreateProjectDTO";
import { Project } from "@prisma/client";

export interface IProjectsRepository {
  create(data: ICreateProjectDTO): Promise<Project>;
  findByName(name: string): Promise<Project | null>;
}

import { Project } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { ICreateProjectDTO } from "../../dtos/ICreateProjectDTO";
import { IProjectsRepository } from "./../IProjectsRepository";

export class ProjectsRepository implements IProjectsRepository {
  async create({ name, authorId, value }: ICreateProjectDTO): Promise<Project> {
    const project = await prismaClient.project.create({
      data: {
        name,
        value,
        authorId,
      },
    });

    return project;
  }

  async findByName(name: string): Promise<Project | null> {
    const project = await prismaClient.project.findUnique({
      where: {
        name,
      },
    });

    return project;
  }
}

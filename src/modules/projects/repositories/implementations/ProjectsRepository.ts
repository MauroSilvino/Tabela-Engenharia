import { prismaClient } from "./../../../../database/prismaClient";
import { Project } from "@prisma/client";
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

    await prismaClient.$executeRawUnsafe(
      `CREATE TABLE custom_items_${authorId}_${project.id} (
        id INT NOT NULL AUTO_INCREMENT, 
        description VARCHAR(5000), 
        unity VARCHAR(50), 
        quantity VARCHAR(50), 
        value DOUBLE,
        user_id INT,
        project_id INT,
        category_id INT,
        FOREIGN KEY(user_id) REFERENCES users(id), 
        FOREIGN KEY(project_id) REFERENCES projects(id),
        FOREIGN KEY(category_id) REFERENCES categories(id), 
        PRIMARY KEY(id)
      );`
    );

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

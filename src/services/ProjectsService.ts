import { prisma } from '../utils/db.server';
import { Project, ProjectSelect } from './projects.interfaces';

export default class ProjectsService {
  static async createProject({
    name,
    street,
    city,
    state,
    zip_code,
    deposit,
  }: Project): Promise<ProjectSelect> {
    const newProject = await prisma.projects.create({
      data: {
        name,
        street,
        city,
        state,
        zip_code,
        deposit,
      },
      //   select: {
      //     id: true,
      //     name: true,
      //     street: true,
      //     city: true,
      //     state: true,
      //     zip_code: true,
      //     deposit: true,
      //     createdAt: true,
      //   },
    });
    return newProject;
  }
}

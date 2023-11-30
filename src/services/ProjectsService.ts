import { prisma } from '../utils/db.server';
import { Project, ProjectSelect } from './projects.interfaces';

export default class ProjectsService {
  static async createProject({
    name,
    apt,
    street,
    city,
    state,
    zip_code,
    deposit,
  }: Project): Promise<ProjectSelect> {
    if (apt) {
      const newProject = await prisma.projects.create({
        data: {
          name,
          apt,
          street,
          city,
          state,
          zip_code,
          deposit,
        },
      });
      return newProject;
    } else {
      const newProject = await prisma.projects.create({
        data: {
          name,
          street,
          city,
          state,
          zip_code,
          deposit,
        },
      });
      return newProject;
    }
  }
}

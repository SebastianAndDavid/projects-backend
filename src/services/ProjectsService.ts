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

  static async createProjectWithHomeowner({
    name,
    apt,
    street,
    city,
    state,
    zip_code,
    deposit,
  }: Project): Promise<ProjectSelect> {
    const newProjectWithHomeOwner = await prisma.projects.create({
      data: {
        name,
        apt,
        street,
        city,
        state,
        zip_code,
        deposit,
        homeowners: {
          connect: {
            id: 8,
          },
        },
      },
    });
    return newProjectWithHomeOwner;
  }

  static async getAllProjects(): Promise<ProjectSelect[]> {
    const projects = await prisma.projects.findMany();
    return projects;
  }
}

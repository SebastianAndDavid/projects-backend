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

  static async createProjectWithHomeowner(
    { name, apt, street, city, state, zip_code, deposit }: Project,
    homeownerId: string,
  ): Promise<ProjectSelect> {
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
            id: Number(homeownerId),
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

  static async getProjectById(id: string): Promise<ProjectSelect | null> {
    const project = await prisma.projects.findUnique({
      where: {
        id: Number(id),
      },
    });
    return project;
  }
}

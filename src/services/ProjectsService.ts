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
    id: string,
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
            id: Number(id),
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

  static async getProjectWithHomeowner(
    id: string,
  ): Promise<ProjectSelect[] | ProjectSelect | null> {
    const projectWithOwner = await prisma.projects.findMany({
      where: {
        homeowners: {
          //some - filter within nested queries, checkes whether at least one element in a list (homeowners array) meets the condition (has a matching id)
          some: {
            id: Number(id),
          },
        },
      },
    });
    return projectWithOwner;
  }
}

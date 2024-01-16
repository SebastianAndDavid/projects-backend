import { prisma } from '../utils/db.server';

interface PhasesReadOnly {
  id: number;
  name: string;
  goal: string;
}

interface TasksReadOnly {
  id?: number;
  name?: string;
}

interface MilestonesReadOnly {
  id: number;
  name: string;
  phaseId: number;
}

export default class seedPhasesService {
  static async getAllPhases(): Promise<PhasesReadOnly[]> {
    const phases = await prisma.phasesReadOnly.findMany({
      include: {
        MilestonesReadOnly: {
          include: {
            TasksReadOnly: true,
          },
        },
      },
    });
    return phases;
  }
  static async getAllTasksByMilestone(id: string): Promise<TasksReadOnly[]> {
    const phases = await prisma.tasksReadOnly.findMany({
      where: {
        milestoneId: Number(id),
      },
    });
    return phases;
  }
  static async getAllMilestones(): Promise<MilestonesReadOnly[]> {
    const milestones = await prisma.milestonesReadOnly.findMany();
    return milestones;
  }
  static async getMilestonesByPhaseId(
    id: string,
  ): Promise<MilestonesReadOnly[]> {
    const milestone = await prisma.milestonesReadOnly.findMany({
      where: {
        phaseId: Number(id),
      },
    });
    return milestone;
  }
}

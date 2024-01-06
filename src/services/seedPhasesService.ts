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
}

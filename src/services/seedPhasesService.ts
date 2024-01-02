import { prisma } from '../utils/db.server';

interface PhasesReadOnly {
  id: number;
  name: string;
  goal: string;
}

export default class seedPhasesService {
  static async getAllPhases(): Promise<PhasesReadOnly[]> {
    const phases = await prisma.phasesReadOnly.findMany();
    return phases;
  }
}

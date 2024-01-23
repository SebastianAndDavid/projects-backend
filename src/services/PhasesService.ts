import { prisma } from '../utils/db.server';
import { Phase } from './phaseInterface.interface';

export default class PhasesService {
  static async createPhase(phase: Phase): Promise<Phase> {
    const newPhase = await prisma.phases.create({
      data: phase,
    });
    return newPhase;
  }
}

import { prisma } from '../src/utils/db.server';

interface PhasesReadOnly {
  name: string;
  goal: string;
}

interface MilestonesReadOnly {
  name: string;
  phaseId: number;
}

interface TasksReadOnly {
  name: string;
  milestoneId: number;
}

async function seedPhases() {
  await Promise.all(
    getPhases().map((phase) => {
      return prisma.phasesReadOnly.create({
        data: {
          name: phase.name,
          goal: phase.goal,
        },
      });
    }),
  );
  await Promise.all(
    getMilestones().map((milestone) => {
      return prisma.milestonesReadOnly.create({
        data: {
          name: milestone.name,
          phaseId: milestone.phaseId,
        },
      });
    }),
  );
  await Promise.all(
    getTasks().map((task) => {
      return prisma.tasksReadOnly.create({
        data: {
          name: task.name,
          milestoneId: task.milestoneId,
        },
      });
    }),
  );
}

function getPhases(): Array<PhasesReadOnly> {
  return [
    {
      name: 'Programming',
      goal: 'Goal: Clarify our vision, scope and existing conditions',
    },
    {
      name: 'Schematic Design',
      goal: 'Goal: Establish the design direction',
    },
  ];
}

function getMilestones(): Array<MilestonesReadOnly> {
  return [
    {
      name: 'Intake',
      phaseId: 1,
    },
    {
      name: 'Site Measure',
      phaseId: 1,
    },
    {
      name: 'Design',
      phaseId: 2,
    },
    {
      name: 'Schematic Design Presentation',
      phaseId: 2,
    },
    {
      name: 'Revisions From Schematic Presentations',
      phaseId: 2,
    },
    {
      name: 'Plans to GC',
      phaseId: 2,
    },
  ];
}

function getTasks(): Array<TasksReadOnly> {
  return [
    {
      name: 'Interview client about goals/parameters',
      milestoneId: 1,
    },
    {
      name: 'Vision Exercise & Design Questionnaire(s)',
      milestoneId: 1,
    },
    {
      name: 'Site measure & document existing conditions as needed',
      milestoneId: 2,
    },
    {
      name: 'Create plan of existing conditions',
      milestoneId: 2,
    },
    {
      name: 'First pass at entire design: Concept images, fixture ideas, plan finishes palette and a 3D model to pull it all together.',
      milestoneId: 3,
    },
    {
      name: 'Summary: Floorplan layout options, 3D model, finishes, fixtures concepts',
      milestoneId: 4,
    },
    {
      name: 'After meeting, Client will be sent a PDF copy of the presentation plans and images.',
      milestoneId: 4,
    },
    {
      name: 'Revise plan as needed per client feedback (normally 1 round of revisions is sufficient at this phase)',
      milestoneId: 5,
    },
    {
      name: 'Coordinate w/ Architect and/or Contractor if needed (done throughout phase).',
      milestoneId: 5,
    },
    {
      name: 'PDF plans w/ notes/dimensions for preliminary Contractor Pricing (feasibility), if desired.',
      milestoneId: 6,
    },
  ];
}

seedPhases();

-- CreateTable
CREATE TABLE "PhasesReadOnly" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "goal" TEXT NOT NULL,

    CONSTRAINT "PhasesReadOnly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MilestonesReadOnly" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phaseId" INTEGER NOT NULL,

    CONSTRAINT "MilestonesReadOnly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TasksReadOnly" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "milestoneId" INTEGER NOT NULL,

    CONSTRAINT "TasksReadOnly_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MilestonesReadOnly" ADD CONSTRAINT "MilestonesReadOnly_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "PhasesReadOnly"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TasksReadOnly" ADD CONSTRAINT "TasksReadOnly_milestoneId_fkey" FOREIGN KEY ("milestoneId") REFERENCES "MilestonesReadOnly"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Phases" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Phases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Milestones" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "weekCount" INTEGER NOT NULL,
    "phaseId" INTEGER NOT NULL,

    CONSTRAINT "Milestones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "milestoneId" INTEGER NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Phases" ADD CONSTRAINT "Phases_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Milestones" ADD CONSTRAINT "Milestones_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "Phases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_milestoneId_fkey" FOREIGN KEY ("milestoneId") REFERENCES "Milestones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

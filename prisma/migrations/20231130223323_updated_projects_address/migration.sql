/*
  Warnings:

  - You are about to drop the column `address` on the `Projects` table. All the data in the column will be lost.
  - Added the required column `apt` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip_code` to the `Projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "address",
ADD COLUMN     "apt" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL,
ADD COLUMN     "zip_code" TEXT NOT NULL;
